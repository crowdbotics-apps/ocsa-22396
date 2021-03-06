import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile169338Navigator from '../features/UserProfile169338/navigator';
import Tutorial169337Navigator from '../features/Tutorial169337/navigator';
import NotificationList169309Navigator from '../features/NotificationList169309/navigator';
import Settings169308Navigator from '../features/Settings169308/navigator';
import Settings169300Navigator from '../features/Settings169300/navigator';
import UserProfile169298Navigator from '../features/UserProfile169298/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile169338: { screen: UserProfile169338Navigator },
Tutorial169337: { screen: Tutorial169337Navigator },
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
