// Example from https://beta.reactjs.org/learn

import { useState } from 'react'
import styles from'./card.module.css'

function ProfileCard() {

  const [founders, setFounders] = useState([
    {
      "name": "Ummar Ikram",
      "position": "Founder",
      "image": "/ummar.jpg",
      "email": "ummarikram@gmail.com"
    },
    {
      "name": "M. Burhan",
      "position": "Co-Founder",
      "image": "/burhan.jpg",
      "email": "sheikhburhan055@gmail.com"
    },
    {
      "name": "Umar Farooq",
      "position": "Co-Founder",
      "image": "/umar.jpg",
      "email": "umarfaru288@gmail.com"
    }
  ])

  return (
    <div style={{textAlign: "center", marginTop: "30px"}}>
      {founders.map(founder => (
        <div style={{marginBottom: "30px"}} key={founder.name}>
          <div className={styles.card}>
            <div>
              <div className={styles.avatar}>
                <img
                  src={founder.image}
                  alt={founder.name}
                />
              </div>
              <h5 className={styles.title}>
                {founder.name}
              </h5>
              <p className={styles.address}>
                {founder.position}
                <br />
                <span className={styles.email}>
                  <a href={`mailto:${founder.email}`}>{founder.email}</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function MyApp() {
  return <ProfileCard />
}
