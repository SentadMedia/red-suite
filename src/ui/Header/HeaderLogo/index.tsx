import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import theme from 'ui/Theme';

interface HeaderLogoProps {
  text: string;
}

const useStyles = makeStyles({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  }
});

const HeaderLogo: React.FC<HeaderLogoProps> = ({ text }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.title} variant="h6" color="inherit" noWrap>
      {text}
    </Typography>
  );
};

export default HeaderLogo;
