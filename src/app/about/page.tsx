import Image from 'next/image'
import styles from './about.module.css'
import ahmed from "../../../public/Ahmed.jpg"

export default function About() {
  return (
    <div className={styles.container} id='about'>
      <h1>About Luxe Timepieces</h1>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            Luxe Timepieces is a premier watch company dedicated to crafting exquisite timepieces for the discerning collector. With a passion for precision and an eye for elegance we bring together the finest materials and expert craftsmanship to create watches that are both functional and beautiful.
          </p>
          <p>
            Our journey began in 2005 when our founder, a horologist with over 30 years of experience set out to create a watch company that would redefine luxury. Today we continue to push the boundaries of watchmaking combining traditional techniques with innovative designs.
          </p>
          <p>
            At Luxe Timepieces, we believe that a watch is more than just a tool to tell time its a work of art a statement of style and a companion for lifes most important moments. We invite you to explore our collection and discover the perfect timepiece to accompany you on your journey.
          </p>
        </div>
        <div className={styles.image}>
          <Image src={ahmed} alt="Luxe Timepieces Workshop" width={500} height={300} />
        </div>
      </div>
    </div>
  )
}