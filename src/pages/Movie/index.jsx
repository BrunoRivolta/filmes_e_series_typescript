import React, { useEffect, useState } from 'react'
import Slider from 'components/Slider'
import styles from './Movies.module.scss'
import apiMovie from 'assets/movies.json'


export default function Movie() {
  
  const [allMovies, setAllMovies] = useState([])
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])

  useEffect(() => {
    setAllMovies(apiMovie)
    const mov = apiMovie.filter(item => item.type === 'filme')
    setMovies(mov)
    const ser = apiMovie.filter(item => item.type === 'serie')
    setSeries(ser)
  }, [])

  return (
    <section className={styles.movies}>
      <h3>{`Todos os filmes >`}</h3>
      <h2>Mais Vistos</h2>
      <div className={styles.movies__categoria}>
      <Slider movies={allMovies} initial={200} link={true}/>
      </div>
      <h2>Filmes</h2>
      <div className={styles.movies__categoria}>
      <Slider movies={movies} initial={100} link={true}/>
      </div>
      <h2>Series</h2>
      <div className={styles.movies__categoria}>
      <Slider movies={series} initial={150} link={true}/>
      </div>
    </section>
  )
}
