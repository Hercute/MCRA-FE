import { atom } from 'recoil';
import { OrderPage, Recipe } from '@/types/recipe';

export const recipeState = atom<Recipe>({
  key: 'recipeState',
  default: {
    title: '',
    description: '',
    dishName: '',
    cookingTime: '',
    mainImg: '',
    category: '',
    ingredients: [
      {
        name: '',
        count: ''
      }
    ]
  }
});

export const orderPagesState = atom<OrderPage[]>({
  key: 'orderPagesState',
  default: [{ id: 1, description: '', file: undefined, showDeleteButton: false }]
});

export const hashTagsState = atom({
  key: 'hashTagState',
  default: [] as string[]
});
