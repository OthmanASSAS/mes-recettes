import axios from 'axios';

import {
  fetchRecipesAction,
  fetchSelectedRecipeAction,
} from '../../redux/actions';

const ENDPOINT_BASE = 'https://api.spoonacular.com/recipes/';
const ENDPOINT_RECIPES = ENDPOINT_BASE + 'complexSearch';
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
  } catch (err) {}
};

export const fetchSelectedRecipe = async (dispatch, recipeId) => {
  try {
    console.log('in fetchSelectedRecipe');
    const response = await axios.get(
      ENDPOINT_BASE + recipeId + '/information',
      { params: { apiKey } }
    );
    console.log('RESPONSE RECIPE', response.data);
    return dispatch(fetchSelectedRecipeAction(response.data));
  } catch (err) {
    console.log('error request recipes', err);
  }
};
