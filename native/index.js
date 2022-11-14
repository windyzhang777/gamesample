/**
 * TODO: This code is valid to run storybook. However, we need to determine where
 * the actual storybook ui component will live in the app for development
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App);
