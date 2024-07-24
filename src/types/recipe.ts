export type OrderPage = {
  id: number;
  description: string;
  file?: File;
  filePreview?: string;
  showDeleteButton?: boolean;
};
interface Ingredient {
  name: string;
  count: string;
}
export type Recipe = {
  title: string;
  description: string;
  dishName: string;
  cookingTime: string;
  mainImg: string;
  category: string;
  ingredients: Ingredient[];
};
