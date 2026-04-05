import './App.css'
import Card from './components/Card.tsx'
import ChaiList from './components/ChaiList.tsx'
import Counter from './components/Counter.tsx'
import type { Chai } from './types/type.tsx'

const menu: Chai[] = [
  {
    id: 10,
    name: "masala Chai",
    price: 40,
    isSpecial: true
  },
  {
    id: 11,
    name: "Ginger Chai",
    price: 50,
    isSpecial: true
  },

]
function App() {

  return (
    <>
      <div className='flex items-center justify-center h-screen text-center'>

        <div>
          <Card
            name="HeadPhone"
            isSpecial={true}
            price={800}
          />
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
