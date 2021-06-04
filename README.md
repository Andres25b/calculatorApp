# calculatorApp-ReactNative

## Componentes utilizados

---

- <code>SafeAreaView</code>

Se encarga de representa el contenido y aplica automáticamente el relleno a la barra de notificaciones.

```javascript
<SafeAreaView style={styles.calculatorBackground}>
  <CalculadoraScreen />
</SafeAreaView>
```

- <code>StatusBar</code>

Se encarga de controlar los estilos de la barra de notificaciones.

```javascript
<SafeAreaView style={styles.calculatorBackground}>
  <StatusBar backgroundColor="black" barStyle="light-content" />
  <CalculadoraScreen />
</SafeAreaView>
```
