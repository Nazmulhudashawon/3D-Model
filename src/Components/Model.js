import React,{useRef} from 'react'
import {Canvas,extend,useThree,useFrame } from 'react-three-fiber'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import "./Model.css";


extend({OrbitControls})
function Model() {



    const Controls = () => {

        const controls  = useRef()  

        const {camera,gl} = useThree()

        useFrame(() => {
            controls.current.update()
        })
        

        return (
            <orbitControls ref={controls} autoRotate args={[camera,gl.domElement]}></orbitControls>
        )
    }



    return (
        <div class="style">
            <Canvas>
                <mesh>

                <Controls />

                    <boxBufferGeometry attach="geometry" args={[1,1]}></boxBufferGeometry>


                    <meshBasicMaterial wireframe attach="material" color="tomato"></meshBasicMaterial>


                </mesh>
            </Canvas>
        </div>
    )
}

export default Model
