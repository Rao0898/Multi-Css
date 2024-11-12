"use client";

import { Clock, LockIcon, ClockAlertIcon, Package } from 'lucide-react';
import styles from './service.module.css';

const services = [
  { id: 1, name: 'Watch Repair', description: 'Expert repair services for all watch brands', icon: LockIcon },
  { id: 2, name: 'Battery Replacement', description: 'Quick and efficient battery replacement', icon: Clock },
  { id: 3, name: 'Authentication', description: 'Verify the authenticity of your luxury timepiece', icon: ClockAlertIcon },
  { id: 4, name: 'Custom Orders', description: 'Create your own unique, personalized watch', icon: Package },
];

export default function Services() {
  return (
    <div className={styles.container} id='service'>
      <h1>Our Services</h1>
      <div className={styles.grid}>
        {services.map((service) => (
          <div key={service.id} className={styles.card}>
            <service.icon className={styles.icon} />
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <button className={styles.button}>Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
}
