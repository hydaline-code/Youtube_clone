
// /mockData/sidebarMenuData.js
//import { icon } from '@fortawesome/fontawesome-svg-core';
import { v4 as uuidv4 } from 'uuid';
import { faHome, faCompass, faVideo, faHistory, faChevronRight, faFilm, faDownload,faUserCircle, faFire, faMusic, faGamepad,faTrophy,faWifiStrong,faGraduationCap, faAlignLeft, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export const sidebarMenuData = [
  {
    id: uuidv4,
    label: 'Home',
    icon: faHome,
    key:'home',
    subcategories: [], // No subcategories for Home
  },
  {
    id: uuidv4,
    label: 'Shorts',
    icon: faCompass,
    key:'shorts',
    subcategories: [], // No subcategories for Home
  },
  {
    id: uuidv4,
    label: 'Subscriptions',
     icon: faVideo,
    key:'subscriptions',
    subcategories: [], // No subcategories for Home
  },
  {
    id: uuidv4,
    label: 'Vous',
    icon: faChevronRight,
    key:'vous',
    active: true,
    subcategories: [
      { id: 201, label: 'History', icon: faHistory },
      { id: 202, label: 'Playlist' , icon:  faFilm},
      { id: 203, label: 'Movies', icon: faFilm },
      { id: 204, label: 'Downloads' , icon: faDownload},
    ],
  },
  {
    id: uuidv4,
    label: ' Subscriptions',
    key:'subscriptions',
    active: true,
    icon: '',
    subcategories: [
      { id: 301, label: 'Channel 1' , icon: faUserCircle},
      { id: 302, label: 'Channel 2', icon: faUserCircle },
      { id: 303, label: 'Channel 3', icon: faUserCircle},
    ],
  },
 
  {
    id: uuidv4,
    label: 'Explore',
    icon: '',
    active: true,
    key:'explore',
    subcategories: [
      { id: 201, label: 'Trending', icon: faFire },
      { id: 202, label: 'Music' , icon: faMusic},
      { id: 203, label: 'Gaming', icon: faGamepad },
      { id: 204, label: 'Movies' , icon: faFilm},
      { id: 205, label: 'Sports', icon: faTrophy },
      { id: 206, label: 'News' , icon: faMusic},
      { id: 207, label: 'Education', icon: faGraduationCap },
      { id: 208, label: 'Lives' , icon: faWifiStrong},
    ],
  },

];

