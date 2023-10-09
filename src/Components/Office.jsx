
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Office(props) {
  const { nodes, materials } = useGLTF('./models/LuisMap.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.mer2001.geometry} material={materials['Material.001']} position={[-12.609, -1.223, 0]} rotation={[0, -0.197, 0]} scale={[1.865, 1.92, 2.214]} />
      <mesh geometry={nodes.bloc_avant.geometry} material={materials.Material} position={[10.477, 0.848, -9.156]} />
      <mesh geometry={nodes.bloc_fond.geometry} material={materials['Material.010']} position={[-18.05, 0.779, -2.271]} rotation={[0, -1.33, 0]} />
      <mesh geometry={nodes.pierres_passage.geometry} material={materials['Material.002']} position={[-7.364, -0.287, -1.406]} rotation={[Math.PI, -0.541, Math.PI]} />
      <mesh geometry={nodes._caillasse.geometry} material={materials['Material.002']} position={[3.752, -0.023, -1.334]} rotation={[0, -1.33, 0]} />
      <mesh geometry={nodes.arbre_rose.geometry} material={materials['Material.012']} position={[9.822, 2.358, -1.273]} scale={0.233} />
      <mesh geometry={nodes.chateau_noir.geometry} material={materials['Material.005']} position={[-0.179, 3.311, 8.526]} scale={1.682} />
      <mesh geometry={nodes.pics_glace.geometry} material={materials['Material.009']} position={[2.341, 1.926, -8.392]} rotation={[0, -1.1, 0]} scale={[0.889, 1, 0.889]} />
      <mesh geometry={nodes.temple_colonne.geometry} material={materials.temple} position={[-7.751, 0.36, -8.52]} rotation={[0, 0.442, 0]} scale={0.637} />
      <group position={[-8.093, 4.116, 6.455]} rotation={[0, 0.057, 0]}>
        <mesh geometry={nodes.Icosphere.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Icosphere_1.geometry} material={materials['Material.007']} />
      </group>
      <mesh geometry={nodes.temple_fond.geometry} material={materials['Material.011']} position={[-22.675, 2.491, -0.246]} rotation={[0, 0.23, 0]} scale={2.049} />
      <mesh geometry={nodes.sapin015.geometry} material={materials['Material.006']} position={[-8.439, 0.425, 3.825]} rotation={[-Math.PI, 0.533, -Math.PI]} scale={[0.066, 0.115, 0.066]} />
      <mesh geometry={nodes.feuille_rose300.geometry} material={materials['Material.004']} position={[9.83, 4.995, -1.513]} rotation={[2.52, 0.712, 2.031]} scale={0.236} />
      <mesh geometry={nodes.bloc_centre.geometry} material={materials['Material.013']} position={[1.089, 1.097, 3.652]} />
    </group>
  )
}

useGLTF.preload('./models/LuisMap.glb')