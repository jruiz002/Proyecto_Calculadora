import Keyboard from '../components/Keyboard';

export default {
  title: 'Calculadora/Keyboard',
  component: Keyboard,
};

const mockHandlers = {
  input: (val) => alert(`Input: ${val}`),
  setOp: (op) => alert(`Operador: ${op}`),
  equal: () => alert('Igual'),
  clear: () => alert('Limpiar'),
  dot: () => alert('Punto decimal'),
  toggleSign: () => alert('Cambiar signo')
};

export const TecladoCompleto = () => <Keyboard handlers={mockHandlers} />;
