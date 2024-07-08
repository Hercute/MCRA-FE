import { atom } from 'recoil';

export const recipeState = atom({
  key: 'recipeState',
  default: {
    title: '',
    description: '',
    dishName: '',
    cookingTime: '',
    ingredients: [
      {
        name: '',
        count: ''
      }
    ]
  }
});
