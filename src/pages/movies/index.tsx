import React, { useEffect, useState } from 'react'
import CardMovie from './CardMovie'
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
      <h2>Mais Vistos</h2>
      <div className={styles.movies__maisVistos}>
        {movies.map((movie: IMovie) => (
          <CardMovie 
            _id={movie._id} 
            name={movie.name}
            year={movie.year}
            img={movie.img}
            type={movie.type}
            director_id={movie.director_id}
            channel_id={movie.channel_id}
          />
        ))}
      </div>
      <h2>Estreia do Mês</h2>
      <div className={styles.movies__maisVistos}>
        {movies.map((movie: IMovie) => (
          <CardMovie 
            _id={movie._id} 
            name={movie.name}
            year={movie.year}
            img={movie.img}
            type={movie.type}
            director_id={movie.director_id}
            channel_id={movie.channel_id}
          />
        ))}
      </div>
      <h2>Filmes mais Nerds</h2>
      <div className={styles.movies__maisVistos}>
        {movies.map((movie: IMovie) => (
          <CardMovie 
            _id={movie._id} 
            name={movie.name}
            year={movie.year}
            img={movie.img}
            type={movie.type}
            director_id={movie.director_id}
            channel_id={movie.channel_id}
          />
        ))}
      </div>
    </section>
  )
}
