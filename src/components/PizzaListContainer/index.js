import { connect } from 'react-redux';

import { getAllPizzas } from '../../redux/pizzas/actions';
import PizzaList from '../PizzaList';

const mapStateToProps = state => ({ pizzas: state.pizzas });

const mapDispatchToProps = dispatch => ({
  loadPizzas: url => {
    dispatch(getAllPizzas(url));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PizzaList);
