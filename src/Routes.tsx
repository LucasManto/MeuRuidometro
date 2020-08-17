import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import NoisemeterScreen from './pages/NoisemeterScreen';
import InfoRoutes from './routes/InfoRoutes';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        tabBarOptions={{
          activeBackgroundColor: '#E15554',
          inactiveBackgroundColor: '#E1BC29',
          activeTintColor: '#3BB273',
          inactiveTintColor: '#1c3144',
          style: {
            elevation: 0,
            shadowOpacity: 0,
            height: Platform.OS === 'ios' ? 84 : 64,
          },
          tabStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: Platform.OS === 'ios' ? 20 : 0,
          },
          safeAreaInsets: {
            bottom: 0,
          },
          iconStyle: {
            flex: 0,
            width: 20,
            height: Platform.OS === 'ios' ? 24 : 20,
          },
          labelStyle: {
            fontSize: 13,
            marginLeft: 16,
          },
        }}>
        <Screen
          name="Noisemeter"
          component={NoisemeterScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Icon name="microphone" size={size} color={color} />
            ),
            tabBarLabel: 'Ruidômetro',
          }}
        />
        <Screen
          name="InfoList"
          component={InfoRoutes}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Icon name="information" size={size} color={color} />
            ),
            tabBarLabel: 'Informações',
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
