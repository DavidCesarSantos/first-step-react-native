import { shape, string, exact } from 'prop-types';

export const pizza = shape({
  id: string,
  description: string,
  title: string,
  image: exact({
    url: string,
  }),
  price: string,
  currency: string,
});
