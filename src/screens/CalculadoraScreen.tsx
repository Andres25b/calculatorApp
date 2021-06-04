import React from 'react';
import {Text, View} from 'react-native';
import {BottonCalc} from '../components/BottonCalc';
import {styles} from '../theme/appTheme';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    number,
    beforeNumber,
    buildNumber,
    clean,
    sign,
    del,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculadora();

  return (
    <View style={styles.calculatorContainer}>
      {beforeNumber !== '0' && (
        <Text style={styles.resultHistoy}>{beforeNumber}</Text>
      )}

      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      {/* Fila de botones */}
      <View style={styles.row}>
        <BottonCalc text="C" color="#9B9B9B" action={clean} />
        <BottonCalc text="+/-" color="#9B9B9B" action={sign} />
        <BottonCalc text="DEL" color="#9B9B9B" action={del} />
        <BottonCalc text="/" color="#FF9427" action={btnDividir} />
      </View>

      {/* Fila de botones */}
      <View style={styles.row}>
        <BottonCalc text="7" action={buildNumber} />
        <BottonCalc text="8" action={buildNumber} />
        <BottonCalc text="9" action={buildNumber} />
        <BottonCalc text="x" color="#FF9427" action={btnMultiplicar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.row}>
        <BottonCalc text="4" action={buildNumber} />
        <BottonCalc text="5" action={buildNumber} />
        <BottonCalc text="6" action={buildNumber} />
        <BottonCalc text="-" color="#FF9427" action={btnRestar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.row}>
        <BottonCalc text="1" action={buildNumber} />
        <BottonCalc text="2" action={buildNumber} />
        <BottonCalc text="3" action={buildNumber} />
        <BottonCalc text="+" color="#FF9427" action={btnSumar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.row}>
        <BottonCalc text="0" action={buildNumber} ancho />
        <BottonCalc text="." action={buildNumber} />
        <BottonCalc text="=" color="#FF9427" action={calcular} />
      </View>
    </View>
  );
};
