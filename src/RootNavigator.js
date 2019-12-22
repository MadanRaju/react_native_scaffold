import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Animated, Easing, Dimensions, StyleSheet } from 'react-native';

import HomePage from './containers/HomePageContainer';
import UpcomingOutages from './containers/UpcomingOutagesContainer';
import PastOutages from './containers/PastOutagesContainer';
import OutageInfo from './containers/OutageInfoContainer';
import ConfirmETA from './containers/ConfirmETAContainer';
import ConfirmArrivalTime from './containers/ConfirmArrivalTimeContainer';
import ConfirmERT from './containers/ConfirmERTContainer';
import UpdateERTReason from './containers/UpdateERTReasonContainer';
import TimeRemaining from './containers/TimeRemainingContainer';
import UpdateERTReasonOther from './containers/UpdateERTReasonOtherContainer';
import UpdateERT from './containers/UpdateERTContainer';
import ConfirmALU from './containers/ConfirmALUContainer';
import ConfirmStartTime from './containers/ConfirmStartTimeContainer';
import UpdateStartTimeReason from './containers/UpdateStartTimeReasonContainer';
import ActivityLog from './containers/ActivityLogContainer';
import OutageComplete from './containers/OutageCompleteContainer';

import MyProfile from './components/MyProfile/MyProfile';
import DrawerMenu from './components/DrawerMenu/DrawerMenu';

const noTransitionConfig = () => ({
  transitionSpec: {
    timing: Animated.timing,
    easing: Easing.step0,
  },
});

const { width } = Dimensions.get('window');

const Drawer = DrawerNavigator(
  {
    HomePage: {
      screen: HomePage,
      navigationOptions: {
        title: 'Home',
      },
    },
    MyProfile: {
      screen: MyProfile,
      navigationOptions: {
        title: 'My Profile',
      },
    },
  },
  {
    contentComponent: DrawerMenu,
    contentOptions: {
      itemStyle: {
        display: 'flex',
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: '#4A4A4A',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      labelStyle: {
        fontSize: 14,
        fontWeight: 'bold',
      },
    },
    drawerWidth: width - Math.floor(width * 0.2),
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);

export default StackNavigator(
  {
    Home: {
      screen: Drawer,
      navigationOptions: {
        title: 'Home Page',
        headerStyle: {
          backgroundColor: 'white',
        },
      },
    },
    UpcomingOutages: {
      screen: UpcomingOutages,
      navigationOptions: {
        title: 'Upcoming Outages',
      },
    },
    PastOutages: {
      screen: PastOutages,
      navigationOptions: {
        title: 'Past Outages',
      },
    },
    OutageInfo: {
      screen: OutageInfo,
      // navigationOptions: {
      //   title: 'Outage Info',
      // },
    },
    ConfirmETA: {
      screen: ConfirmETA,
      navigationOptions: {
        title: 'Confirm ETA',
      },
    },
    ConfirmArrivalTime: {
      screen: ConfirmArrivalTime,
      navigationOptions: {
        title: 'Confirm Arrival Time',
      },
    },
    ConfirmStartTime: {
      screen: ConfirmStartTime,
      navigationOptions: {
        title: 'Confirm / Update Outage Start Time',
      },
    },
    UpdateStartTimeReason: {
      screen: UpdateStartTimeReason,
      navigationOptions: {
        title: 'Confirm / Update Outage Start Time',
      },
    },
    ConfirmERT: {
      screen: ConfirmERT,
      navigationOptions: {
        title: 'Confirm or Update ERT',
      },
    },
    UpdateERTReason: {
      screen: UpdateERTReason,
      navigationOptions: {
        title: 'Update ERT',
      },
    },
    UpdateERTReasonOther: {
      screen: UpdateERTReasonOther,
      navigationOptions: {
        title: 'Update ERT',
      },
    },
    TimeRemaining: {
      screen: TimeRemaining,
      navigationOptions: {
        title: 'Time Remaining',
      },
    },
    UpdateERT: {
      screen: UpdateERT,
      navigationOptions: {
        title: 'Update ERT',
      },
    },
    ConfirmALU: {
      screen: ConfirmALU,
      navigationOptions: {
        title: 'Confirm ALU',
      },
    },
    OutageComplete: {
      screen: OutageComplete,
      navigationOptions: {
        title: 'Outage Complete',
        headerLeft: null,
      },
    },
    ActivityLog: {
      screen: ActivityLog,
      // navigationOptions: {
      //   title: '',
      // },
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#595959',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center',
      },
      headerMode: 'float',
      transitionConfig: noTransitionConfig,
    },
  },
);
