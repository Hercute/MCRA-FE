export type Recipe = {
  id: number;
  memberId: number;
  title: string;
  name: string;
  comment: string;
  servings: number;
  time: number;
  likeCounts: number;
  image?: string;
};

export const dummyRecipes: Recipe[] = [
  {
    id: 1,
    memberId: 1,
    title: '레시피 제목11111',
    name: '간장계란밥',
    comment: '간장, 계란, 밥을 넣으시오',
    servings: 3,
    time: 60,
    likeCounts: 999
  },
  {
    id: 2,
    memberId: 2,
    title: '관리자의 계란밥',
    name: '간장계란밥(관리자)',
    comment: '간장, 계란, 밥을 넣으시오',
    servings: 2,
    time: 6,
    likeCounts: 12092109
  },
  {
    id: 3,
    memberId: 1,
    title: '레시피 제목2222',
    name: '간장계란밥222',
    comment: '간장, 계란, 밥을 넣으시오2222',
    servings: 22,
    time: 620,
    likeCounts: 1
  },
  {
    id: 4,
    memberId: 1,
    title: '레시피 제목33333',
    name: '간장계란밥33333',
    comment: '간장, 계란, 밥을 넣으시오3333',
    servings: 33,
    time: 630,
    likeCounts: 4
  },
  {
    id: 5,
    memberId: 1,
    title: '레시피 제목333331',
    name: '간장계란밥5553',
    comment: '간장, 계란, 밥을 넣으시오3333',
    servings: 33,
    time: 630,
    likeCounts: 4
  },
  {
    id: 6,
    memberId: 1,
    title: '레시피 제목333332',
    name: '간장계란밥66634',
    comment: '간장, 계란, 밥을 넣으시오33334',
    servings: 33,
    time: 630,
    likeCounts: 4
  }
];
