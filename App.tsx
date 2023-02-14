import React from 'react';
import { View, Text } from 'react-native';
import BudgetScreen from './src/screens/BudgetScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import globalStyles from './src/styles/global';

const App = () => {
  return (
    <View style={ globalStyles.corazon }>
      <Icon name="heart" size={50} color="#f50" />
      <BudgetScreen />
    </View>
  );
};


export default App;
