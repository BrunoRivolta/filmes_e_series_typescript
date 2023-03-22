import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './Slider.module.scss'

function Slider({ movies, initial }) {

  const carousel = useRef()
 
  const [width, setWidth] = useState(0)

  const moviesShuffle = shuffleArray(movies)
  
  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [movies])

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
  }
  
  return (
    <div className={styles.slider}>
      <motion.div ref={carousel} className={styles.slider__carousel } whileTap={{ cursor: 'grabbing' }} > 
        <motion.div 
          className={styles.slider__motion}
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: initial }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {moviesShuffle.map(movie => (
              <motion.div key={movie._id} className={styles.slider__card}>
                <img src={movie.img} alt={movie.name} />
                <a href='inde.html'><p>{movie.name}</p></a>
              </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slider;