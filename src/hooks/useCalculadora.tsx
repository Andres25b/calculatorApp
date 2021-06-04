import {useState, useRef} from 'react';

enum Operadores {
  sumar,
  resta,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
  const [number, setNumber] = useState('0');
  const [beforeNumber, setBeforeNumber] = useState('0');
  const ultimaOperacion = useRef<Operadores>();

  const buildNumber = (TextNumber: string) => {
    // No aceptar doble punto.
    if (number.includes('.') && TextNumber === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Punto decimal
      if (TextNumber === '.') {
        setNumber(number + TextNumber);

        // Si es otro cero, y hay un punto
      } else if (TextNumber === '0' && number.includes('.')) {
        setNumber(number + TextNumber);

        // Evaluar si es diferente de cero y no tiene un punto
      } else if (TextNumber !== '0' && !number.includes('.')) {
        setNumber(TextNumber);

        // Evitar el 0000.0
      } else if (TextNumber === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + TextNumber);
      }
    } else {
      setNumber(number + TextNumber);
    }
  };

  const clean = () => {
    setNumber('0');
    setBeforeNumber('0');
  };

  const sign = () => {
    number.includes('-')
      ? setNumber(number.replace('-', ''))
      : setNumber(`-${number}`);
  };

  const del = (textNumber: string) => {
    let negativo = '';
    let numeroTemp = number;

    if (number.includes('-')) {
      negativo = '-';
      numeroTemp = number.substr(1);
    }

    if (numeroTemp.length > 1) {
      setNumber(negativo + numeroTemp.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const cambiarNumeroPorAnterior = () => {
    if (number.endsWith('.')) {
      setBeforeNumber(number.slice(0, -1));
    } else {
      setBeforeNumber(number);
    }
    setNumber('0');
  };

  const btnDividir = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };

  const btnMultiplicar = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };

  const btnRestar = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacion.current = Operadores.resta;
  };

  const btnSumar = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  };

  const calcular = () => {
    const num1 = Number(number);
    const num2 = Number(beforeNumber);

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumber(`${num1 + num2}`);
        break;
      case Operadores.resta:
        setNumber(`${num2 - num1}`);
        break;
      case Operadores.multiplicar:
        setNumber(`${num1 * num2}`);
        break;
      case Operadores.dividir:
        if (beforeNumber === '0') return;
        if (number === '0') {
          setNumber('0');
          return;
        }
        setNumber(`${num2 / num1}`);
        break;
    }
    setBeforeNumber('0');
  };

  return {
    beforeNumber,
    number,
    buildNumber,
    clean,
    sign,
    del,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  };
};
