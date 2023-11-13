import React, {Suspense,useEffect,useState} from 'react';
import { Canvas, events } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'
const Computers = ({ismobile}) => {

const computer =useGLTF('./desktop_pc/scene.gltf')

  return (
  <mesh>
    <hemisphereLight intensity={1.15} groundColor="black"   />
   <pointLight intensity={5} />
   <spotLight position={[-20,50,10]}
   angle={0,12}
   penumbra={1}
   intensity={1}
   
castShadow
shadow-mapSize={1024}

   />
    <primitive object={computer.scene} 
    scale={ismobile ?0.6:0.75}
    position={ismobile ?[0,-2,-2.2] :[0,-4.25,-1.5]}
    rotation={[-0.01,-0.2,-0.1]}
    
    />
  </mesh>
  )
}

const ComputersCanvas=()=>{
const[ismobile,setismobile]=useState(false)

useEffect(()=>{
  const mediaquery=window.matchMedia('(max-width:500px)');
  setismobile(mediaquery.matches)

const handlemediaquerychange=(event)=>{
  setismobile(event.matches)
}

mediaquery.addEventListener('change',handlemediaquerychange);
return()=>{
  mediaquery.removeEventListener('change',handlemediaquerychange)
}

},[])

  return (
  
<Canvas
frameloop='demand'
shadows
camera={{position:[27,3,7],fov:25}}
gl={{preserveDrawingBuffer:true}}
>
<Suspense >
  <OrbitControls enableZoom={false}
  maxPolarAngle={Math.PI/2}
minPolarAngle={Math.PI/2}

  />
  <Computers ismobile={ismobile} />

</Suspense>
<Preload all />
</Canvas>

  )
}
export default ComputersCanvas