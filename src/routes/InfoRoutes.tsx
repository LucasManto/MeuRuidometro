import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import InfoListScreen from '../pages/InfoListScreen';
import InfoScreen from '../pages/InfoScreen';

const { Navigator, Screen } = createStackNavigator();

const InfoRoutes = () => {
  return (
    <Navigator>
      <Screen
        name="InfoList"
        component={InfoListScreen}
        options={{
          title: 'Informações',
        }}
      />
      <Screen
        name="Info"
        component={InfoScreen}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default InfoRoutes;
