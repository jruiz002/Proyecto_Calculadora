import { useState } from 'react'

const MAX_LENGTH = 9

export default function useCalculatorLogic () {
  const [display, setDisplay] = useState('0')
  const [operator, setOperator] = useState(null)
  const [prevValue, setPrevValue] = useState(null)
  const [resetNext, setResetNext] = useState(false)

  const input = (val) => {
    if (resetNext) {
      setDisplay(val)
      setResetNext(false)
    } else {
      if (display.length >= MAX_LENGTH) return
      setDisplay(display === '0' ? val : display + val)
    }
  }

  const dot = () => {
    if (resetNext) {
      setDisplay('0.')
      setResetNext(false)
      return
    }
    if (!display.includes('.') && display.length < MAX_LENGTH) {
      setDisplay(display + '.')
    }
  }

  const toggleSign = () => {
    if (display === '0') return
    const newVal = display.startsWith('-') ? display.slice(1) : '-' + display
    if (newVal.length > MAX_LENGTH) return
    setDisplay(newVal)
  }

  const setOp = (op) => {
    const num = parseFloat(display)
    if (prevValue != null && operator) {
      const result = calculate()
      if (result === 'ERROR') {
        setDisplay('ERROR')
        return
      }
      setPrevValue(result)
      setDisplay(String(result))
    } else {
      setPrevValue(num)
    }
    setOperator(op)
    setResetNext(true)
  }

  const calculate = () => {
    const current = parseFloat(display)
    let result
    switch (operator) {
      case '+': result = prevValue + current; break
      case '-': result = prevValue - current; break
      case '*': result = prevValue * current; break
      case '/': result = current === 0 ? 'ERROR' : prevValue / current; break
      case '%': result = prevValue % current; break
      default: return current
    }
    if (result < 0 || result > 999999999 || String(result).length > MAX_LENGTH) return 'ERROR'
    return parseFloat(result.toFixed(6))
  }

  const equal = () => {
    const result = calculate()
    setDisplay(String(result))
    setPrevValue(null)
    setOperator(null)
    setResetNext(true)
  }

  const clear = () => {
    setDisplay('0')
    setOperator(null)
    setPrevValue(null)
    setResetNext(false)
  }

  return { display, input, dot, toggleSign, setOp, equal, clear }
}
