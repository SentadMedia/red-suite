import { Theme, withTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import React from 'react';
import Spinner from 'react-spinkit';

export interface LoadingPageProps {
  theme: Theme;
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ theme }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
      data-test="wrapperGrid"
    >
      <Grid item xs={3} data-test="innerGrid">
        <Spinner
          name="ball-grid-beat"
          color={theme.palette.primary['main']}
          data-test="spinner"
        />
      </Grid>
    </Grid>
  );
};

export default withTheme(LoadingPage);
