"use client";

import styles from './contact.module.css';

export default function Contact() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Form submission handling logic here (e.g., API call, validation, etc.)
  };

  return (
    <div className={styles.container} id="contact">
      <h1>Contact Us</h1>
      <div className={styles.content}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              placeholder="Enter your name" 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              placeholder="Enter your email" 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              required 
              placeholder="Enter your message" 
            ></textarea>
          </div>
          <button type="submit" className={styles.button}>Send Message</button>
        </form>
        <div className={styles.info}>
          <h2>Get in Touch</h2>
          <p>We  love to hear from you. Please feel free to contact us with any questions or inquiries.</p>
          <div className={styles.contactInfo}>
            <p><strong>Email:</strong> info@luxetimepieces.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Address:</strong> 123 Luxury Lane, Watchville, WA 98765</p>
          </div>
        </div>
      </div>
    </div>
  );
}
