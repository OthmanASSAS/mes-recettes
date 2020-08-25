import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getSelectedRecipe } from '../../../redux/selectors';
import { fetchSelectedRecipe } from '../../../api/recipes';

const RecipesDetailsScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const dispatch = useDispatch();

  const recipe = useSelector(getSelectedRecipe);
  useEffect(() => {
    fetchSelectedRecipe(dispatch, id);
  }, []);
  return (
    <View>
      <Text>RecipesDetailsScreen</Text>
      <Text>{recipe.title}</Text>
      <Button title='Revenir' onPress={() => navigation.goBack()} />
    </View>
  );
};

export default RecipesDetailsScreen;
