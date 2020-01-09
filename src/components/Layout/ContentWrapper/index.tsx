import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

interface ContentWrapper {
  children?: React.ReactNode;
}

const ContentWrapper: React.FC<ContentWrapper> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <CssBaseline />
      {props.children}
    </div>
  );
};

export default ContentWrapper;
