import Display from '../components/Display';

export default {
  title: 'Calculadora/Display',
  component: Display,
};

export const Vacio = () => <Display value="" />;
export const ConNumero = () => <Display value="12345" />;
export const ConDecimal = () => <Display value="3.1416" />;
