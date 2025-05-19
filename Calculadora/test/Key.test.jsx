import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Key from '../src/components/Key'

test('ejecuta onClick al presionar el botón', async () => {
  const mockClick = vi.fn()
  render(<Key label="7" onClick={mockClick} />)

  await userEvent.click(screen.getByText('7'))
  expect(mockClick).toHaveBeenCalledTimes(1)
})
