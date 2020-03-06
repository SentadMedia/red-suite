import { Theme, withStyles } from '@material-ui/core/styles';

import theme from 'ui/Theme';

const styles = (theme: Theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 101
  },
  toolBar: {
    minHeight: 48
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  grow: {
    flexGrow: 1
  }
});

export default (component: any) => withStyles(styles(theme))(component);
