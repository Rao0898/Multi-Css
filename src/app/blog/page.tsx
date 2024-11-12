import Image from 'next/image'
import Link from 'next/link'
import styles from './blog.module.css'

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Watchmaking',
    excerpt: 'Discover the intricate process behind creating luxury timepieces...',
    mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTvMVZSOIpQN1PppciSd5maBJqpxymIv_0dA&s',
   
  },
  {
    id: 2,
    title: 'Top 5 Watch Trends of 2024',
    excerpt: 'Explore the latest styles and innovations in the world of horology...',
    mainImage: 'https://w0.peakpx.com/wallpaper/352/338/HD-wallpaper-breitling-watch-watches-money-thumbnail.jpg',
    
  },
  {
    id: 3,
    title: 'Caring for Your Luxury Watch',
    excerpt: 'Learn how to maintain and preserve your valuable timepiece...',
    mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRh1cp89REUWJZBlgpUbd3trU6E8Eup2Mn0w&s',
    
  },
  {
    id: 4,
    title: 'The History of Timekeeping',
    excerpt: 'Journey through the fascinating evolution of measuring time...',
    mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvsHKJW2wXULDJojrfY0n7yppcZTmkmedZmg&s',
    
  },
];

export default function Blog() {
  return (
    <div className={styles.container} id='blog'>
      <h1>Luxe Timepieces Blog</h1>
      <div className={styles.grid}>
        {blogPosts.map((post) => (
          <div key={post.id} className={styles.card}>
            <Image
              src={post.mainImage}
              alt={post.title}
              width={400} 
              height={200} // Set a fixed height for the images
              className={styles.image}
            />
            <div className={styles.content}>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <Link href={`/blog/${post.id}`} className={styles.readMore}>
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
