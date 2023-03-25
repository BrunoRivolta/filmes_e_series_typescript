import CloseButton from 'components/CloseButton'
import React, { useEffect, useState } from 'react'
import styles from './Modal.module.scss'

export default function Modal({ isOpen, setModal, movie }) { 

    const [director, setDirector] = useState({
        name: 'Desconhecido',
        country: 'Desconhecido',
        img: 'https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg'
    })
    const [channel, setChannel] = useState({
        name: 'Desconhecido',
        img: 'https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg'
    })
        
    useEffect(() => {
        if(movie.director_id !== undefined) {
            fetch(`http://35.175.126.10/diretores/${movie.director_id}`)
            .then(res => res.json())
            .then(director => {
                console.log(director)
              setDirector(director)
            })
        }
      }, [movie])

      useEffect(() => {
        if(movie.channel_id !== undefined) {
            fetch(`http://35.175.126.10/canais/${movie.channel_id}`)
            .then(res => res.json())
            .then(channel => {
                console.log(channel)
              setChannel(channel)
            })
        }
      }, [movie])

    if(isOpen) {  
        return (
            <div className={styles.background}>
                <div className={styles.modal}>
                    <div 
                        onClick={() =>{
                            setModal()
                        }} 
                        className={styles.closeButton}
                    >
                        <CloseButton />
                    </div>
                    <div className={styles.main}>
                        <div className={styles.title}>
                            <h1>{movie.name}</h1>
                            <h2>{movie.year}</h2>
                        </div>
                        <div className={styles.video}>
                            <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.director}>
                                <h2>Diretor:</h2>
                                <img src={director.img} alt={director.name}/>
                                <h3>{director.name}</h3>
                                <p>{director.country}</p>
                            </div>
                            <div className={styles.channel}>
                                <h2>Canal:</h2>
                                <img src={channel.img} alt={channel.name}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (null)
    }
}
