import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Keyboard from '../src/components/Keyboard'

test('llama a input("1") cuando se presiona la tecla 1', async () => {
  const input = vi.fn()
  const mockHandlers = {
    input,
    setOp: vi.fn(),
    equal: vi.fn(),
    clear: vi.fn(),
    dot: vi.fn(),
    toggleSign: vi.fn()
  }

  render(<Keyboard handlers={mockHandlers} />)

  await userEvent.click(screen.getByText('1'))
  expect(input).toHaveBeenCalledWith('1')
})
