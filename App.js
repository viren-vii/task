import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './Screens/Home';
import {NativeBaseProvider, extendTheme} from 'native-base';
import MySpaceScreen from './Screens/MySpace';
import NotificationScreen from './Screens/Notification';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {Avatar} from 'native-base';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarStyle: {height: 60},
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'ios-home' : 'ios-home-outline';
              } else if (route.name === 'Notifications') {
                iconName = focused
                  ? 'ios-notifications'
                  : 'ios-notifications-outline';
              } else if (route.name === 'My Space') {
                return (
                  <Avatar
                    size={'sm'}
                    source={{
                      uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                    }}>
                    AJ
                  </Avatar>
                );
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#00ab55',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="My Space" component={MySpaceScreen} />
          <Tab.Screen name="Notifications" component={NotificationScreen} />
        </Tab.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
