import Display from './components/Display'
import Keyboard from './components/Keyboard'
import useCalculatorLogic from './hooks/useCalculatorLogic'

export default function App () {
  const logic = useCalculatorLogic()
  return (
    <div className='container'>
      <Display value={logic.display} />
      <Keyboard handlers={logic} />
    </div>
  )
}
