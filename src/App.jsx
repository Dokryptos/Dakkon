import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Map } from './Components/Map'

function App() {

  return (
    <>
      <Canvas>
        <Map />
      </Canvas>

    </>
  )
}

export default App
