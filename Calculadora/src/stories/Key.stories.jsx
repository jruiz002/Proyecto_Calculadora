import Key from '../components/Key';

export default {
  title: 'Calculadora/Key',
  component: Key,
};

export const Digito = () => <Key label="7" onClick={() => alert('Presionaste 7')} />;
export const Operador = () => <Key label="+" onClick={() => alert('Suma')} />;
export const Igual = () => <Key label="=" onClick={() => alert('Resultado')} />;
