/**
 * Tabs Scenes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Scene } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';
import { AppStyles, AppSizes } from '@theme/';

// Components
import { TabIcon } from '@ui/';
import { NavbarMenuButton } from '@containers/ui/NavbarMenuButton/NavbarMenuButtonContainer';

// Scenes
import Placeholder from '@components/general/Placeholder';
import Error from '@components/general/Error';
import PersonContainer from '@containers/persons/PersonContainer';
import PersonView from '@containers/persons/PersonView';
import MyTimeline from '@containers/meetings/MyTimeline'
import Utils from '@containers/util/utils'

const navbarPropsTabs = {
  ...AppConfig.navbarProps,
  renderLeftButton: () => <NavbarMenuButton />,
  sceneStyle: {
    ...AppConfig.navbarProps.sceneStyle,
  },
  paddingBottom: AppSizes.tabbarHeight,
};

/* Routes ==================================================================== */
const scenes = (
  <Scene key={'tabBar'} tabs tabBarIconContainerStyle={AppStyles.tabbar} pressOpacity={0.95}>

  <Scene
  key={'timeline'}
  {...navbarPropsTabs}
  title={'Timeline'}
  component={MyTimeline}
  icon={props => TabIcon({ ...props, icon: 'timeline' })}
  />

  <Scene
  {...navbarPropsTabs}
  key={'persons'}
  title={'Contacts'}
  icon={props => TabIcon({ ...props, icon: 'search' })}
  >
  <Scene
  initial
  {...navbarPropsTabs}
  key={'PersonListing'}
  component={PersonContainer}
  title={'Contacts'}
  />
  </Scene>


  <Scene
  key={'error'}
  {...navbarPropsTabs}
  title={'Utilities'}
  component={Utils}
  icon={props => TabIcon({ ...props, icon: 'error' })}
  />
  </Scene>
);

export default scenes;
