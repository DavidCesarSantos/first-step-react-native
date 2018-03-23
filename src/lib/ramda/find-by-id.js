import { find, propEq } from 'ramda';

export default (value, array) => find(propEq('id', value))(array);
