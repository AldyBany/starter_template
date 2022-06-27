import Navbar from 'components/navbar'
import React from 'react'

const Banner = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
        
    </div>
  )
}

export default Banner

const styles = {
container:'min-h-screen w-full bg-blue-200 font-montserrat'}
  


console.log(styles.wrapper)