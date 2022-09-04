import {TextInput, FlatList, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  let valorInicial = []

  let [listaCompras, definirListaCompras] = useState(valorInicial);
  return (
    <View style={styles.container}>
      <Text>Lista de Compras - Insira os Items</Text>
    <FlatList
    data={listaCompras}
    renderItem={({item})=><Text>{item}</Text>}
    />
    <TextInput style={styles.caixaTexto}
    placeholder={'Adiciona Novo Item'}
    onSubmitEditing={
      ({nativeEvent})=>definirListaCompras(listaCompras.concat(nativeEvent.text))
    }
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  caixaTexto:{
    padding: 20,
    marginTop: 20,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  }
});
