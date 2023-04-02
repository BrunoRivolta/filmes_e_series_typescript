import React, { useEffect, useState } from 'react'
import Slider from 'components/Slider'
import styles from './Directors.module.scss'
import apiDirectors from 'assets/director.json'
import apiChannels from 'assets/channels.json'

export default function Directors() {
  
  const [directors, setDirectors] = useState<object[]>(apiDirectors)
  const [channels, setChannels] = useState<object[]>(apiChannels)

  return (
    <section className={styles.movies}>
      <h3>{`Infromações sobre filmes >`}</h3>
      <h2>Diretores de cinema</h2>
      <div className={styles.movies__categoria}>
        <Slider movies={directors} initial={200} link={false}/>
      </div>
      <h2>Canais famosos</h2>
      <div className={styles.movies__categoria}>
        <Slider movies={channels} initial={200} link={false}/>
      </div>
    </section>
  )
}
