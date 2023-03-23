import React, { useEffect, useState } from 'react'
import Slider from 'components/Slider'
import styles from './Directors.module.scss'

export default function Directors() {
  
  const [allMovies, setAllMovies] = useState([])
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])

  useEffect(() => {
    fetch("http://35.175.126.10/diretores")
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
      <h3>{`Todos os diretores >`}</h3>
      <h2>Diretores de cinema</h2>
      <div className={styles.movies__categoria}>
        <Slider movies={allMovies} initial={200}/>
        <Slider movies={allMovies} initial={200}/>
        <Slider movies={allMovies} initial={200}/>
      </div>
    </section>
  )
}
