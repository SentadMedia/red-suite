import AddIcon from '@material-ui/icons/Add';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AppMenuItem from './AppMenuItem';
import BackupIcon from '@material-ui/icons/Backup';
import BlockIcon from '@material-ui/icons/Block';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import BusinessIcon from '@material-ui/icons/Business';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CompassCalibrationIcon from '@material-ui/icons/CompassCalibration';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DeleteIcon from '@material-ui/icons/Delete';
import DescriptionIcon from '@material-ui/icons/Description';
import DnsIcon from '@material-ui/icons/Dns';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import DraftsIcon from '@material-ui/icons/Drafts';
import DvrIcon from '@material-ui/icons/Dvr';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ExploreIcon from '@material-ui/icons/Explore';
import ExtensionIcon from '@material-ui/icons/Extension';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import List from '@material-ui/core/List';
import ListIcon from '@material-ui/icons/List';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import MailIcon from '@material-ui/icons/Mail';
import NoteIcon from '@material-ui/icons/Note';
import PeopleIcon from '@material-ui/icons/People';
import PieChartIcon from '@material-ui/icons/PieChart';
import PublicIcon from '@material-ui/icons/Public';
import React from 'react';
import ScheduleIcon from '@material-ui/icons/Schedule';
import SendIcon from '@material-ui/icons/Send';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorageIcon from '@material-ui/icons/Storage';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ViewListIcon from '@material-ui/icons/ViewList';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

const AppMenu: React.FC = () => {
  return (
    <List component="nav" disablePadding>
      {adminMenu.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  );
};
export default AppMenu;

const adminMenu = [
  { name: 'Dashboard', Icon: DashboardIcon },
  {
    name: 'Servers Management',
    Icon: CloudUploadIcon,
    items: [
      {
        name: 'Servers Providers',
        Icon: StorageIcon,
        items: [
          { name: 'Add New Provider', Icon: AddIcon },
          { name: 'Show Providers List', Icon: ListIcon }
        ]
      },
      {
        name: 'Servers',
        Icon: CloudUploadIcon,
        items: [
          { name: 'Add New Servers', Icon: AddIcon },
          { name: 'Show Servers List', Icon: ListIcon },
          { name: 'Large Servers', Icon: FlashOnIcon },
          { name: 'Add Server IPs', Icon: EqualizerIcon }
        ]
      },
      {
        name: 'Domains',
        Icon: DnsIcon,
        items: [
          { name: 'Add New Domains', Icon: AddIcon },
          { name: 'Show Domains List', Icon: ListIcon }
        ]
      }
    ]
  },
  {
    name: 'Users & Accessibilities',
    Icon: PeopleIcon,
    items: [
      {
        name: 'Users',
        Icon: PeopleIcon,
        items: [
          { name: 'Add New Users', Icon: AddIcon },
          { name: 'Show Users List', Icon: ListIcon }
        ]
      },
      {
        name: 'Accessibilities',
        Icon: VpnKeyIcon,
        items: [
          { name: 'Servers Accessibilities', Icon: CloudUploadIcon },
          { name: 'ISPs Accessibilities', Icon: DraftsIcon },
          { name: 'Offers Accessibilities', Icon: PublicIcon },
          { name: 'Email Lists Accessibilities', Icon: ListIcon }
        ]
      }
    ]
  },
  {
    name: 'Mailing Management',
    Icon: ExtensionIcon,

    items: [
      {
        name: 'Sponsors',
        Icon: BusinessCenterIcon,
        items: [
          { name: 'Add New Sponsors', Icon: AddIcon },
          { name: 'Show Sponsors List', Icon: ListIcon }
        ]
      },
      {
        name: 'Verticals',
        Icon: ShoppingBasketIcon,
        items: [
          { name: 'Add New Verticals', Icon: AddIcon },
          { name: 'Show Verticals List', Icon: ListIcon }
        ]
      },
      {
        name: 'Offers',
        Icon: EventNoteIcon,
        items: [
          { name: 'Add New Offers', Icon: AddIcon },
          { name: 'Show Offers List', Icon: ListIcon }
        ]
      }
    ]
  },
  {
    name: 'ISPs',
    Icon: DraftsIcon,
    items: [
      { name: 'Add New ISPs', Icon: AddIcon },
      { name: 'Show ISPs List', Icon: ListIcon }
    ]
  },

  {
    name: 'Data Lists',
    Icon: DraftsIcon,
    items: [
      { name: 'Add Emails List', Icon: AddIcon },
      { name: 'Show Data Lists', Icon: ListIcon },
      { name: 'Add Suppression File ', Icon: BlockIcon },
      { name: 'Add BlackList', Icon: ThumbDownIcon },
      { name: 'Clean Bounce Emails', Icon: DeleteIcon },
      { name: 'Manage Seeds Lists', Icon: DescriptionIcon }
    ]
  },

  {
    name: 'Negative',
    Icon: VerifiedUserIcon,
    items: [
      { name: 'Get Good Words', Icon: DoneAllIcon },
      { name: 'Retreive Negative', Icon: MailIcon },
      { name: 'Change Time Zones', Icon: ScheduleIcon }
    ]
  },

  {
    name: 'Production',
    Icon: BusinessIcon,
    items: [
      { name: 'Sponsors', Icon: AddShoppingCartIcon },
      { name: 'Drops Monitoring', Icon: DvrIcon },
      { name: 'Send Page', Icon: SendIcon },
      { name: 'Upload Images', Icon: BackupIcon },
      { name: 'Manage PMTA', Icon: ExploreIcon },
      { name: 'PMTA Multi-Monitors', Icon: CompassCalibrationIcon },
      { name: 'Servers Ips List', Icon: ViewListIcon },
      {
        name: 'Predefined Headers',
        Icon: NoteIcon,
        items: [
          { name: 'Add Header', Icon: AddIcon },
          { name: 'Show Headers', Icon: ListIcon }
        ]
      }
    ]
  },

  {
    name: 'Statistics',
    Icon: EqualizerIcon,
    items: [
      { name: 'Opens Statistics', Icon: VisibilityIcon },
      { name: 'Clicks Statistics', Icon: ThumbUpAltIcon },
      { name: 'Unsubs Statistics', Icon: ThumbDownIcon },
      { name: 'Leads Statistics', Icon: LoyaltyIcon },
      { name: 'IPs Statistics', Icon: PieChartIcon }
    ]
  }
];
