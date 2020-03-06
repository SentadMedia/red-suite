import { Theme, withStyles } from '@material-ui/core/styles';

import theme from 'ui/Theme';

export const styles = (theme: Theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 101
  },
  toolBar: {
    minHeight: 48
  },

  grow: {
    flexGrow: 1
  }
});

export default (component: any) => withStyles(styles(theme))(component);
