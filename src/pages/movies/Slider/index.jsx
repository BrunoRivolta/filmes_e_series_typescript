import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './Slider.module.scss'

function Slider({ movies }) {

  const carousel = useRef()
  const [width, setWidth] = useState(0)
  
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])
  
  return (
    <div className={styles.slider}>
      <motion.div ref={carousel} className={styles.slider__carousel}> 
        <motion.div 
          className={styles.slider__motion}
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 150 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          {movies.map(movie => (
              <motion.div key={movie.name} className={styles.slider__card}>
                <img src={movie.img} alt={movie.name} />
                <a href='inde.html'><p>{movie.name}</p></a>
              </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Slider;