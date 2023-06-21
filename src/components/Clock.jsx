import React, { useState, useEffect } from 'react'
import '../styles/Clock.scss';

const Clock = () => {

    const defaultData = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Sergio',
        apellidos: 'Ayerdis Rodríguez',
    }

const [data, setData] = useState(defaultData);

useEffect(() => {
  const timerID = setInterval(tick, 1000);

  return () => {
    clearInterval(timerID);
  }
}, [])

    const tick = () => {
        setData(prevState => ({
            fecha: new Date(),
            edad: prevState.edad + 1,
        }));
    }

  return (
    <div className='clock-container'>
         <h2>
         Hora Actual: {data.fecha.toLocaleTimeString()}
         </h2>
         <h3>{data.nombre} {data.apellidos}</h3>
         <h1>Edad: {data.edad}</h1>
         </div>
  )
}

export default Clock
