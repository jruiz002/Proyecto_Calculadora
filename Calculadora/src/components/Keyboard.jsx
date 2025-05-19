import Key from './Key'

export default function Keyboard ({ handlers }) {
  const { input, setOp, equal, clear, dot, toggleSign } = handlers
  const keys = [
    ['C', clear], ['+/-', toggleSign], ['%', () => setOp('%')], ['/', () => setOp('/')],
    ['7', () => input('7')], ['8', () => input('8')], ['9', () => input('9')], ['*', () => setOp('*')],
    ['4', () => input('4')], ['5', () => input('5')], ['6', () => input('6')], ['-', () => setOp('-')],
    ['1', () => input('1')], ['2', () => input('2')], ['3', () => input('3')], ['+', () => setOp('+')],
    ['0', () => input('0')], ['.', dot], ['=', equal]
  ]

  return (
    <div className='keyboard'>
      {keys.map(([label, action]) => (
        <Key key={label} label={label} onClick={action} />
      ))}
    </div>
  )
}
