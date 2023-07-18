import {AppRegistry} from 'react-native';
import {App} from './App';

// should keep same name with name field in `../app.json`
const APP_NAME = 'RNTemplate';

AppRegistry.runApplication(
  AppRegistry.registerComponent(APP_NAME, () => App),
  {
    rootTag: document.getElementById('root'),
  },
);
