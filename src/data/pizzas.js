const pizza = id => ({
  id: `2725673652${id}`,
  title: `TBO - ${id}`,
  description: 'Twix, Bounty, Oréo',
  price: 1099,
  currency: '€',
  image: {
    url: 'http://www.cahierdecuisine.com/fileadmin/_processed_/csm_8788_Pizza_poulet_chevre_miel_fa1bfe63ff.jpg',
  },
});

export default pizzaNumber =>
  new Array(pizzaNumber).fill(null).map((_, i) => pizza(i));
