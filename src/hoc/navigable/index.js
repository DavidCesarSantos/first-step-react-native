import { any } from 'prop-types';

import styles from './styles';

export default (WrappedComponent, title) => {
  WrappedComponent.navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.title : title,
      headerStyle: styles.header,
      headerTitleStyle: styles.title,
    };
  };

  WrappedComponent.propTypes = {
    ...WrappedComponent.propTypes,
    navigation: any,
  };

  return WrappedComponent;
};
