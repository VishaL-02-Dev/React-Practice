// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Hello } from './components/Hello';
import { Counter } from './components/Counter';
import { LiveText } from './components/LiveText';

function App() {
  return (
    <>
      <div className='container'>
        <Hello/>
      </div>
      <div className='container'>
        <Counter/>
      </div>
      <div>
        <LiveText/>
      </div>
    </>
  )
}

export default App
