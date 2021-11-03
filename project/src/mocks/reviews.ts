import {Review} from '../types/review';

export const reviews: Review[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 1,
    rating: 3,
    user: {
      avatarUrl: '/img/avatar-max.jpg',
      id: 4,
      isPro: false,
      name: 'Max',
    },
  },
  {
    comment: 'An independent House, strategically located between Rembrand Square and National Opera',
    date: '2020-12-23T14:13:56.569Z',
    id: 2,
    rating: 5,
    user: {
      avatarUrl: '/img/avatar-angelina.jpg',
      id: 7,
      isPro: true,
      name: 'Peter',
    },
  },
];
