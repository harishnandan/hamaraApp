/**
 * Load the App component.
 *  (All the fun stuff happens in "/src/index.js")
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

import { AppRegistry } from 'react-native';
import AppContainer from './src';
import Form from './src/containers/meetings/ChemistMeeting';
import dataModel from './src/redux/data_models'

AppRegistry.registerComponent('eManager', () => AppContainer);
