import axios from 'axios';

import { fetchRecipesAction } from '../../redux/actions';

const ENDPOINT_RECIPES = 'https://api.spoonacular.com/recipes/complexSearch';
const apiKey = 'c631f78b16ae47e0862ed7a10acd5c1d';
const MAX_PER_PAGE = 30;

export const fetchRecipes = async (dispatch, query) => {
  try {
    const response = await axios.get(ENDPOINT_RECIPES, {
      params: {
        apiKey,
        number: MAX_PER_PAGE,
      },
    });

    return dispatch(fetchRecipesAction(response.data.results));
  } catch (error) {}
};
