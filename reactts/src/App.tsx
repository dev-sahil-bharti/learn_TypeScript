import './App.css'
import Card from './components/Card.tsx'
import ChaiList from './components/ChaiList.tsx'
import Counter from './components/Counter.tsx'
import type { Chai } from './types/type.tsx'

const menu: Chai[] = [
  { id: 10, name: "masala Chai", price: 25, },
  { id: 11, name: "Ginger Chai", price: 50, },
  { id: 10, name: "lemon", price: 40, },

]

function App() {

  return (
    <>
      <div className='grid items-center justify-center h-screen text-center'>

        <div>
          <Card name="HeadPhone" isSpecial={true} price={800} />
        </div>

        <div>
          <Counter />
        </div>

        <div>
          <ChaiList
            items={menu}
          />
        </div>

      </div>
    </>
  )
}

export default App
