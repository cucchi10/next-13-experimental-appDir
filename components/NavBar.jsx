import style from '../styles/navbar.module.css';
import Link from "next/link"
export function NavBar() {

  const links = [{
    label: 'Home',
    route: '/'
  }, {
    label: 'Post',
    route: '/post'
  }, {
    label: 'About',
    route: '/about'
  }]

  return (
    <header className={style.header}>
      <nav className={style.NavBar}>
        <ul className={style.NavUl}>
          {links.map(link => (
            <li key={link.route} className={style.NavLi}>
              <Link href={link.route}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};