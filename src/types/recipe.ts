export type OrderPage = {
  id: number;
  comment: string;
  file?: File;
  filePreview?: string;
  showDeleteButton?: boolean;
};
interface Ingredient {
  name: string;
  quantity: string;
}
export type Recipe = {
  title: string; //레시피 제목
  comment: string; //레시피 설명
  name: string; //요리이름
  time: string; //요리시간
  image: string; //레시피 대표 이미지
  category: string; //카테고리
  ingredientMapList: Ingredient[]; //재료
};
