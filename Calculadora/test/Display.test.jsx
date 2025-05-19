import { render, screen } from '@testing-library/react'
import Display from '../src/components/Display'

test('muestra el valor enviado como prop', () => {
  render(<Display value="123.45" />)
  expect(screen.getByText('123.45')).toBeInTheDocument()
})
