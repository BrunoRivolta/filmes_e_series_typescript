import React, { useEffect, useState } from 'react'
import Slider from 'components/Slider'
import styles from './Movies.module.scss'

export default function Movies() {
  
  const [allMovies, setAllMovies] = useState([])
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])

  useEffect(() => {
    fetch("http://35.175.126.10/filmes")
    .then(res => res.json())
    .then(itens => {
      setAllMovies(itens)
      const mov = itens.filter((item: object | any) => item.type === 'filme')
      setMovies(mov)
      const ser = itens.filter((item: object | any) => item.type === 'serie')
      setSeries(ser)

    })
  }, [])

  return (
    <section className={styles.movies}>
      <h3>{`Todos os filmes >`}</h3>
      <h2>Mais Vistos</h2>
      <div className={styles.movies__categoria}>
      <Slider movies={allMovies} initial={200}/>
      </div>
      <h2>Filmes</h2>
      <div className={styles.movies__categoria}>
      <Slider movies={movies} initial={100}/>
      </div>
      <h2>Series</h2>
      <div className={styles.movies__categoria}>
      <Slider movies={series} initial={150}/>
      </div>
    </section>
  )
}
