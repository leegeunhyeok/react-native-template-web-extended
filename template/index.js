/**
 * @format
 */

import {AppRegistry} from 'react-native';
/**
 * should keep same path with `tsconfig.json` and `babel.config.js`
 */
import {App} from '@/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
