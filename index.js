/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Text, TextInput } from 'react-native'
import { Input } from 'native-base';
import { gestureHandlerRootHOC } from "react-native-gesture-handler"

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.autoCorrect = false;
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
Input.defaultProps = TextInput.defaultProps || {};
Input.defaultProps.placeholderTextColor = "#00000";

console.warn = function () { }
// console.log = function () { }
console.disableYellowBox = true

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));