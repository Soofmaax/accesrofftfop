#!/usr/bin/env bash
set -euo pipefail

COMPANY="SmarterLogicWeb"
YEAR="2025"
LICENSE="MIT"
WEBSITE="https://smarterlogicweb.com"

# Directories to skip
SKIP_DIRS=("node_modules" "dist" "build" ".git" "coverage" ".lighthouseci")

should_skip_path() {
  local path="$1"
  for d in "${SKIP_DIRS[@]}"; do
    if [[ "$path" == *"/$d/"* || "$path" == "$d" || "$path" == "./$d"* ]]; then
      return 0
    fi
  done
  return 1
}

has_header() {
  local file="$1"
  # Check the first 15 lines for an existing SmarterLogicWeb header or copyright
  head -n 15 "$file" | grep -Eiq "(SmarterLogicWeb|@author|Copyright)"
}

add_js_ts_header() {
  local file="$1"
  local header="/**
 * @file Project file
 * @author ${COMPANY}
 * @copyright ${YEAR} ${COMPANY}. All rights reserved.
 * @license ${LICENSE}
 * @see ${WEBSITE}
 */
"
  printf "%s\n" "$header" > "${file}.tmp"
  cat "$file" >> "${file}.tmp"
  mv "${file}.tmp" "$file"
}

add_py_header() {
  local file="$1"
  local header="\"\"\"
Project file

Author: ${COMPANY}
Copyright: ${YEAR} ${COMPANY}. All rights reserved.
License: ${LICENSE}
Website: ${WEBSITE}
\"\"\"
"
  printf "%s\n" "$header" > "${file}.tmp"
  cat "$file" >> "${file}.tmp"
  mv "${file}.tmp" "$file"
}

add_css_header() {
  local file="$1"
  local header="/**
 * Project stylesheet
 * 
 * @author ${COMPANY}
 * @copyright ${YEAR} ${COMPANY}. All rights reserved.
 * @see ${WEBSITE}
 */
"
  printf "%s\n" "$header" > "${file}.tmp"
  cat "$file" >> "${file}.tmp"
  mv "${file}.tmp" "$file"
}

process_file() {
  local file="$1"

  if should_skip_path "$file"; then
    return
  fi

  if has_header "$file"; then
    echo "Skip (header found): $file"
    return
  fi

  case "$file" in
    *.ts|*.tsx|*.js|*.jsx)
      add_js_ts_header "$file"
      echo "Header added (JS/TS): $file"
      ;;
    *.py)
      add_py_header "$file"
      echo "Header added (Python): $file"
      ;;
    *.css|*.scss)
      add_css_header "$file"
      echo "Header added (CSS/SCSS): $file"
      ;;
    *)
      echo "Skip (unsupported type): $file"
      ;;
  esac
}

export -f should_skip_path
export -f has_header
export -f add_js_ts_header
export -f add_py_header
export -f add_css_header
export -f process_file

# Find files and process
find . -type f \
  \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.py" -o -name "*.css" -o -name "*.scss" \) \
  ! -path "*/node_modules/*" \
  ! -path "*/dist/*" \
  ! -path "*/build/*" \
  ! -path "*/.git/*" \
  ! -path "*/coverage/*" \
  ! -path "*/.lighthouseci/*" \
  -print0 | xargs -0 -I{} bash -c 'process_file "$@"' _ {}