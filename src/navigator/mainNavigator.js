import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList41496Navigator from '../features/NotificationList41496/navigator';
import Settings41495Navigator from '../features/Settings41495/navigator';
import Settings41487Navigator from '../features/Settings41487/navigator';
import UserProfile41485Navigator from '../features/UserProfile41485/navigator';
import UserProfile41454Navigator from '../features/UserProfile41454/navigator';
import Tutorial41453Navigator from '../features/Tutorial41453/navigator';
import NotificationList41425Navigator from '../features/NotificationList41425/navigator';
import Settings41424Navigator from '../features/Settings41424/navigator';
import Settings41416Navigator from '../features/Settings41416/navigator';
import UserProfile41414Navigator from '../features/UserProfile41414/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
NotificationList41496: { screen: NotificationList41496Navigator },
Settings41495: { screen: Settings41495Navigator },
Settings41487: { screen: Settings41487Navigator },
UserProfile41485: { screen: UserProfile41485Navigator },
UserProfile41454: { screen: UserProfile41454Navigator },
Tutorial41453: { screen: Tutorial41453Navigator },
NotificationList41425: { screen: NotificationList41425Navigator },
Settings41424: { screen: Settings41424Navigator },
Settings41416: { screen: Settings41416Navigator },
UserProfile41414: { screen: UserProfile41414Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
