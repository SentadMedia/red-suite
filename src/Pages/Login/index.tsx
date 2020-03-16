import { Field, Formik } from 'formik';
import { commitMutation, graphql } from 'react-relay';

import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { relayEnvironment } from 'config';

const useStyles = makeStyles(theme => ({
  image: {
    backgroundImage: 'url(login-image.jpeg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

interface MyFormValues {
  username: string;
  password: string;
  rememberme: boolean;
}

const mutation = graphql`
  mutation LoginPageMutation($username: String!, $password: String!) {
    signIn(username: $username, password: $password)
  }
`;

const LoginPage: React.FC<{}> = () => {
  const classes = useStyles();
  const initialValues: MyFormValues = {
    username: 'mgh.soufiane@gmail.com',
    password: 'SuperSecret',
    rememberme: true
  };
  return (
    <React.Fragment>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              actions.setSubmitting(true);
              commitMutation(relayEnvironment, {
                mutation,
                variables: {
                  username: values.username,
                  password: values.password
                },
                onCompleted: (response, errors) => {
                  actions.setSubmitting(false);
                  console.log(
                    'Response received from server.',
                    response,
                    errors
                  );
                },
                onError: err => {
                  actions.setSubmitting(false);
                  console.error(err);
                }
              });
            }}
          >
            {props => (
              <form className={classes.form} onSubmit={props.handleSubmit}>
                <Field name="username">
                  {({ field, meta }: any) => (
                    <>
                      <TextField
                        id="username"
                        type="email"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Email Address"
                        autoFocus
                        {...field}
                      />
                      {meta.touched && meta.error && meta.error}
                    </>
                  )}
                </Field>
                <Field name="password">
                  {({ field, meta }: any) => (
                    <>
                      <TextField
                        id="password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        {...field}
                      />
                      {meta.touched && meta.error && meta.error}
                    </>
                  )}
                </Field>
                <Field name="rememberme">
                  {({ field, meta }: any) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="remember"
                          color="primary"
                          checked={field.value}
                          {...field}
                        />
                      }
                      label="Remember me"
                    />
                  )}
                </Field>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={props.isSubmitting}
                >
                  Sign In
                </Button>
              </form>
            )}
          </Formik>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" color="textSecondary" align="center">
              {'Copyright © '}
              <Link color="inherit" href="/">
                santamail.com
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Box>
        </div>
      </Grid>
    </React.Fragment>
  );
};

export default LoginPage;
