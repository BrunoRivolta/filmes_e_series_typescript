import React from 'react'
import styles from './CardMovie.module.scss'

interface ICardMovie {
    _id: string
    name: string
    year: number
    img: string
    type: string
    director_id: string
    channel_id: string
  }

export default function CardMovie({ _id, img, name }: ICardMovie) {
  return (
    <div className={styles.movie} key={_id}>
        <img src={img} alt={name}/>
    </div>
    )
}
