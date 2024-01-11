import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native';
import App from './AppBottomTabs';
// import App from './AppStack';
// import App from './AppNavigator';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
