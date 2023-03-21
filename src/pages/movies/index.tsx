import { type } from 'os'
import React, { useEffect, useState } from 'react'
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
    <section className={styles.content}>
      {movies.map((movie: IMovie) => (
        <div className={styles.movie} key={movie._id}>
          <p>{movie._id}</p>
          <h1>{movie.name}</h1>
          <h2>{movie.year}</h2>
          <img src={movie.img} alt={movie.name}/>
          <p>{movie.type}</p>
          <p>{movie.director_id}</p>
          <p>{movie.channel_id}</p>
        </div>
      ))}
    </section>
  )
}
