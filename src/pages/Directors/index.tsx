import React, { useEffect, useState } from 'react'
import Slider from 'components/Slider'
import styles from './Directors.module.scss'

export default function Directors() {
  
  const [directors, setDirectors] = useState([])
  const [channels, setChannels] = useState([])

  useEffect(() => {
    fetch("http://35.175.126.10/diretores")
    .then(res => res.json())
    .then(itens => {
      setDirectors(itens)
    })
  }, [])

  useEffect(() => {
    fetch("http://35.175.126.10/canais")
    .then(res => res.json())
    .then(itens => {
      setChannels(itens)
    })
  }, [])

  return (
    <section className={styles.movies}>
      <h3>{`Infromações sobre filmes >`}</h3>
      <h2>Diretores de cinema</h2>
      <div className={styles.movies__categoria}>
        <Slider movies={directors} initial={200}/>
      </div>
      <h2>Canais famosos</h2>
      <div className={styles.movies__categoria}>
        <Slider movies={channels} initial={200}/>
      </div>
    </section>
  )
}
