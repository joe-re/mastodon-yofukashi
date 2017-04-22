import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

const initialNavState = {
  index: 0,
  routes: [ { key: 'InitA', routeName: 'Login' } ],
};

const nav = (state=initialNavState, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return (newState ? newState : state)
};

export default nav;
