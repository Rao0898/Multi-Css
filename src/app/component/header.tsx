import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Luxe Timepieces</Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/product">Products</Link>
        <Link href="/collection">Collections</Link>
        <Link href="/service">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </header>
  )
}