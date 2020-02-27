import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Spinner from 'react-spinkit';
import { withTheme } from '@material-ui/core/styles';

export interface LoadingPageProps {
  theme: any;
}

export class LoadingPage extends Component<LoadingPageProps> {
  render() {
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
            color={this.props.theme.palette.primary['main']}
            data-test="spinner"
          />
        </Grid>
      </Grid>
    );
  }
}

export default withTheme(LoadingPage);
