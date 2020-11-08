import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList169309Navigator from '../features/NotificationList169309/navigator';
import Settings169308Navigator from '../features/Settings169308/navigator';
import Settings169300Navigator from '../features/Settings169300/navigator';
import UserProfile169298Navigator from '../features/UserProfile169298/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList169309: { screen: NotificationList169309Navigator },
Settings169308: { screen: Settings169308Navigator },
Settings169300: { screen: Settings169300Navigator },
UserProfile169298: { screen: UserProfile169298Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
