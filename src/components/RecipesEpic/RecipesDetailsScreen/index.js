import React from 'react';
import { View, Text, Button } from 'react-native';

const RecipesDetailsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>RecipesDetailsScreen</Text>
      <Button title='Revenir' onPress={() => navigation.goBack()} />
    </View>
  );
};

export default RecipesDetailsScreen;
