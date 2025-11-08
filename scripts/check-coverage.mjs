import fs from 'node:fs';
import path from 'node:path';

const summaryPath = path.resolve('coverage', 'coverage-summary.json');

if (!fs.existsSync(summaryPath)) {
  console.error('Coverage summary not found:', summaryPath);
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(summaryPath, 'utf-8'));
const total = data.total;

const thresholds = {
  lines: Number(process.env.COV_LINES ?? 60),
  functions: Number(process.env.COV_FUNCTIONS ?? 60),
  statements: Number(process.env.COV_STATEMENTS ?? 60),
  branches: Number(process.env.COV_BRANCHES ?? 50),
};

const results = {
  lines: total.lines.pct,
  functions: total.functions.pct,
  statements: total.statements.pct,
  branches: total.branches.pct,
};

const failures = [];

for (const key of Object.keys(thresholds)) {
  if (results[key] < thresholds[key]) {
    failures.push(
      `${key}: ${results[key]}% < required ${thresholds[key]}%`
    );
  }
}

if (failures.length) {
  console.error('Coverage gate failed:\n - ' + failures.join('\n - '));
  process.exit(1);
} else {
  console.log('Coverage gate passed:', results);
}