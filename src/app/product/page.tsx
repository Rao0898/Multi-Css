import Image from 'next/image'
import styles from './product.module.css'

const products = [
  { id: 1, name: 'Luxe Chronograph', price: 5999, image: 'https://w0.peakpx.com/wallpaper/738/474/HD-wallpaper-wrist-watch-watch-style-red.jpg' },
  { id: 2, name: 'Elegant Automatic', price: 3499, image: 'data:image/jpeg;base64,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B+rIx3uXLb3/AKvCmyRX3eOKC7DvHgL213Pl48blal3j1L6JPHjxigyDX/iqzH5nxvNKrHNk8buBVQTc/wAiUGUheLw348OJU16H3B2kA5ooOskOVP2Eo9uPete2SY328ajxj3Kd9B0hdbxXMCQnfk2770HQaIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgjPSWyuireP8B59Ar7lyW53k47vvXXuvcd7RtvGZ+Cz07epfRceuOAQVy9A9W95LyC6bIvbZsPH3qyvL6HIMhBNtDtWxv9n0g6ReBkIZSPrxD3rVsL9ofmtr/wCzpHet9okzpA4d7pYj/KUHQiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgpWuziRj43ZPaWu7HAg+1c6z9B2ktoNfZyGnZPWOBeNxAuYdhK6PRBzIOhTSvyIfth9yqfoR0pwg+1/0rpdEHM56EdKcIPtf9K8noU0r8mH7YfcumkQc0WfoV0rXFsLeZmw/wArSVszoe1Bn0b8IktJjvyBjWNY4uo1pcSSSBmSMPm81stEBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/2Q==' },
  { id: 3, name: 'Diver\'s Professional', price: 4799, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzDcy9QgBex_DVhvhf8WJmfr2VrRM34B55PA&s' },
  { id: 4, name: 'Classic Dress Watch', price: 2999, image: 'data:image/jpeg;base64,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' },
  { id: 5, name: 'Sport Chronometer', price: 6499, image: 'data:image/jpeg;base64,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' },
  { id: 6, name: 'Minimalist Quartz', price: 1999, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc8iKhaiBAZfgfpO1bSZ1qo77PHcQEEP7DEw&s' },
]

export default function Products() {
  return (
    <div className={styles.container} id='product'>
      <h1>Our Product</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <Image src={product.image} alt={product.name} width={300} height={300} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button className={styles.button}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}