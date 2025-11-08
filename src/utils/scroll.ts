export function scrollToSection(sectionId: string): void {
  const el = document.getElementById(sectionId);
  el?.scrollIntoView({ behavior: 'smooth' });
}