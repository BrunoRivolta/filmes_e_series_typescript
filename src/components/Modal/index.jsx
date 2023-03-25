import CloseButton from 'components/CloseButton'
import React from 'react'
import styles from './Modal.module.scss'

export default function Modal({ isOpen, setModal, movie }) { 
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
                        

                    </div>
                </div>
            </div>
        )
    } else {
        return (null)
    }
}
