/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/navigation/RootNavigation';
import {name as appName} from './app.json';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import './gesture-handler.native';

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
