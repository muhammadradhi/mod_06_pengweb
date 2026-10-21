import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const nama = "Radhi"
  const N = 55;
  const jam = 9;

  const styleObj = {
    color: 'green',
    fontSize: 30
  }

  return (
    <>
      <h1 className='Judul' style={{color: styleObj.color, fontSize: styleObj.fontSize}}>Kantin {nama}</h1>
      <h3>{jam < 12 ? "Selamat Pagi" : "Selamat Siang" }</h3>
      <p>Saldo awal kartu kantin {N* 1000}</p>

      <button disabled>
        Bayar
      </button>
    </>
  )
}

export default App
