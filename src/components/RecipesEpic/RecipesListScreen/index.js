import React, { useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, Button } from 'react-native';
import { fetchRecipes } from '../../../api/recipes';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { getRecipes } from '../../../redux/selectors';
import RecipeListItem from './RecipeListItem';

const RecipesListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const recipes = useSelector(getRecipes);
  useEffect(() => {
    fetchRecipes(dispatch);
  }, []);
  const _renderItem = ({ item }) => {
    return <RecipeListItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        renderItem={_renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <Button
        onPress={() => {
          navigation.navigate('RecipesDetails');
        }}
        title="Aller sur l'écran détails"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: 'grey',
  },
});

export default RecipesListScreen;
