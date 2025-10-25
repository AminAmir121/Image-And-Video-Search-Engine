import React from 'react'
import { useState } from 'react'
import styles from './ToggleSelector.module.css'

const ToggleSelector = ({type ,setType}) => {

  const iconSrc  = type === "image" ? "../photo.png" : "../video.png"
   
    return (
        <div className={styles.select} >
            <img src={iconSrc} alt="" />
            <span> ▾</span>
            <div className={styles.below}>

                <button className={styles.show} onClick={()=> setType("image")} >
                    <img src="../photo.png" alt="" />
                    PHOTO
                </button>

                <button className={styles.show} onClick={()=> setType("video")} >
                    <img src="../video.png" alt="" />
                    VIDEO
                </button>

            </div>
        </div>

    )
}

export default ToggleSelector