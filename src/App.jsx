import { useState } from 'react'
import background from './assets/background.jpg'
import { Clock } from '../components/Clock'
import { BookQuotes } from '../components/BookQuotes'
import { WeatherWidget } from '../components/WeatherWidget'
import { SidebarButtons } from '../components/SidebarButtons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="relative h-screen w-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
        <div className="absolute top-5 left-5">
          <h1 className="text-gold text-xl font-bold">NUVE</h1>
        </div>
      
        <div className="absolute top-10 left-10">
          <WeatherWidget />
        </div>
      
        <div className="absolute bottom-10 left-10">
          <Clock />
        </div>
      
        <div className="absolute bottom-10 right-10">
          <BookQuotes />
        </div>
      
        <div className="absolute top-1/3 right-5 flex flex-col gap-4">
          <SidebarButtons />
        </div>
      </div>
    </>
  )
}

export default App
