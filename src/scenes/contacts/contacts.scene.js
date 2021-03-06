import { palette } from 'styles';
import type { Scene } from 'common';
import { ContactsContainer } from './contacts.container';
import { SCENE_IDS } from '../scenes.constants';

export const ContactsScene: Scene = {
  screen: SCENE_IDS.CONTACTS,
  component: ContactsContainer,
  navigatorStyle: {
    navBarHidden: true,
    statusBarColor: palette.primary,
    statusBarTextColorScheme: 'light',
  },
};
