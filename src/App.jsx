import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Canvas } from '@react-three/fiber'
import Crows from './Crows'

function App() {

    return (
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: 95  }}>
            <Crows count={50}/>
        </Canvas>
    )
}

export default App
