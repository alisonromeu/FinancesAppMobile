import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto Luz',
    value: '289,80',
    date: '20/04/2022',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'Boleto Água',
    value: '79,40',
    date: '15/04/2022',
    type: 0
  },
  {
    id: 3,
    label: 'Salário',
    value: '1.890,80',
    date: '10/05/2022',
    type: 1 // entradas
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Alison Romeu" />

      <Balance saldo="12.000,00" gastos="3.500,00" />

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({item}) => <Movements data={item} />}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
