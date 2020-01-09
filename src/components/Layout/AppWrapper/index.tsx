import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    }
  }),
);

interface AppWrapper {
    children?: React.ReactNode;
  }

const AppWrapper: React.FC<AppWrapper> = props=> {
  const classes = useStyles();

  return (
    <div  className={classes.root} >
      <CssBaseline />
      {props.children}
    </div>
  );
}

export default AppWrapper;
