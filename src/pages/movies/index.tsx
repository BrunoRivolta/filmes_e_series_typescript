import React, { useEffect, useState } from 'react'
import Slider from './Slider'
import styles from './Movies.module.scss'

interface IMovie {
  _id: string
  name: string
  year: number
  img: string
  type: string
  director_id: string
  channel_id: string
}

export default function Movies() {
  
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("http://35.175.126.10/filmes")
    .then(res => res.json())
    .then(item => {
      setMovies(item)
    })
  }, [])

  return (
    <section className={styles.movies}>
      <h3>{`Todos os filmes >`}</h3>
      <h2>Mais Vistos</h2>
      <div className={styles.movies__categoria}>

      </div>
      <h2>Filmes</h2>
      <div className={styles.movies__categoria}>

      </div>
      <h2>Series</h2>
      <div className={styles.movies__categoria}>

      </div>
      <Slider movies={movies}/>
    </section>
  )
}
