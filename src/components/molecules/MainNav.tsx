import { NavLink } from './NavLink';

const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/produits', label: 'Produits' },
  { href: '/galerie', label: 'Réalisations' },
  { href: '/a-propos', label: 'Qui sommes-nous ?' },
  { href: '/contact', label: 'Contact' },
];

export function MainNav() {
  return (
    <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
      {navItems.map((item) => (
        <NavLink key={item.href} href={item.href} label={item.label} />
      ))}
    </nav>
  );
}