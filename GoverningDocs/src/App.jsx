import './App.css'
import { Button } from './shareComponents/Button'
import { SectionTitle } from './shareComponents/SectionTitle'

function App() {
 
  return (
    <>
      <Button>Praimary Button</Button>     
      <Button className='bg-white text-black'>Secondary Button</Button>    
      <SectionTitle gradient="Our Client">Reviews From  </SectionTitle> 
    </>
  )
}

export default App
