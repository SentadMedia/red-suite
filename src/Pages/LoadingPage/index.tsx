import Grid from '@material-ui/core/Grid';
import React from 'react';
import Spinner from 'react-spinkit';
import { withTheme } from '@material-ui/core/styles';

export interface LoadingPageProps {
  theme: any;
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
      data-test="Souf"
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
