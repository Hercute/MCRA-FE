import { atom } from 'recoil';
import { OrderPage, Recipe } from '@/types/recipe';

export const recipeState = atom<Recipe>({
  key: 'recipeState',
  default: {
    title: '',
    comment: '',
    name: '',
    time: '',
    image: '',
    category: '',
    ingredientMapList: [
      {
        name: '',
        quantity: ''
      }
    ]
  }
});

export const orderPagesState = atom<OrderPage[]>({
  key: 'orderPagesState',
  default: [{ id: 1, comment: '', file: undefined, showDeleteButton: false }]
});

export const hashTagsState = atom({
  key: 'hashTagState',
  default: [] as string[]
});
