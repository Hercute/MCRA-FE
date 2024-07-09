import { atom } from 'recoil';
import { OrderPage } from '@/types/recipe';

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

export const orderPagesState = atom<OrderPage[]>({
  key: 'orderPagesState',
  default: [{ id: 1, description: '', file: undefined, showDeleteButton: false }]
});
