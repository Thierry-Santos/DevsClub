import React from 'react';
import {StatusBar, Text, TextInput} from 'react-native';
import {Provider} from 'react-redux';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import {IconsMCI} from './src/components';
import {FontScreenSize, ScreenSize, isIOS, isSigned} from './src/helper/Helper';
import {color1, color2, color3, color4} from './src/assets';

import {
  HomePage,
  JobsPage,
  SignUpPage,
  ProfilePage,
  BadgesPage,
  LoginPage,
  NotificationPage,
} from './src/pages';

import store from './src/store';

const MainNavigation = createBottomTabNavigator(
  {
    Home: HomePage,
    Premios: JobsPage,
    Notificação: NotificationPage,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        }
        if (routeName === 'Premios') {
          iconName = 'folder-account';
        }
        if (routeName === 'Notificação') {
          iconName = 'bell';
        }
        // You can return any component that you like here!
        return (
          <IconsMCI
            name={iconName}
            size={isIOS ? FontScreenSize(12) : FontScreenSize(12)}
            color={tintColor}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: color3,
      inactiveTintColor: color1,
      activeBackgroundColor: color2,
      keyboardHidesTabBar: true,
      labelStyle: {
        fontSize: isIOS ? FontScreenSize(8) : FontScreenSize(8),
        fontWeight: 'bold',
      },
      style: {
        paddingTop: 6,
        height: ScreenSize(2, 8),
      },
    },
    resetOnBlur: false,
  },
);

const LoginNavigator = createStackNavigator(
  {
    Login: LoginPage,
    SignUp: SignUpPage,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

const DefaultNavigation = createSwitchNavigator(
  {
    MainApp: MainNavigation,
    LoginApp: LoginNavigator,
    Badges: BadgesPage,
    Profile: ProfilePage,
  },
  {
    initialRouteName: 'MainApp',
    headerMode: 'none',
  },
);

// And the app container
let Navigation = createAppContainer(DefaultNavigation);

// Render the app container component with the provider around it
export default class App extends React.Component {
  constructor(props) {
    super(props);

    // Counter for accessibility device changes
    Text.defaultProps = {...(Text.defaultProps || {}), allowFontScaling: false};
    TextInput.defaultProps = {
      ...(TextInput.defaultProps || {}),
      allowFontScaling: false,
    };
  }

  render() {
    return (
      <Provider store={store}>
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
        <Navigation />
      </Provider>
    );
  }
}
