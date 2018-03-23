import { connect } from 'react-redux';

import PizzaScreen from '../PizzaScreen';
import findById from '../../lib/ramda/find-by-id';
import { addToBasket } from '../../redux/basket/actions';

const mapStateToProps = (state, props) => {
  const pizzaId = props.navigation.state.params.id;
  const pizza = findById(pizzaId, state.pizzas);

  return {
    pizza,
  };
};

const mapDispatchToProps = dispatch => ({
  addToBasket: id => {
    dispatch(addToBasket(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PizzaScreen);
