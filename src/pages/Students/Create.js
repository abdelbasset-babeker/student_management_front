import React from 'react';
import { Grid, Paper, Typography, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  page_title: {
    fontWeight: '600',
    marginLeft: '3rem',
  },
  page_subtitle: {
    marginLeft: '3rem',
  },
}));


export default function Create() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.page_title} variant="h3" color="initial"> New Student</Typography>
      <Typography className={classes.page_subtitle} variant="" color="initial">Welcom to our foundition </Typography>

      <Paper className='paperilement'>

        <form>
          <Grid container spacing={2}>
            <Grid item >
              <TextField label="First Name " variant="outlined" name='lname' />
            </Grid>
            <Grid item >
              <TextField label="Family Name " variant="outlined" name='fname' />
            </Grid>
            <Grid item >
              <TextField
                id="date"
                label="Birthdate"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            <Grid item >
              <TextField label="Outlined" variant="outlined" name='address' />
            </Grid>



            <Grid item >
              <TextField label="Outlined" variant="outlined" name='sex' />
            </Grid>
            <Grid item >
              <TextField label="Outlined" variant="outlined" name='Lname' />
            </Grid>
            <Grid item >
              <TextField label="Outlined" variant="outlined" name='Lname' />
            </Grid>
            <Grid item >
              <TextField label="Outlined" variant="outlined" name='Lname' />
            </Grid>

          </Grid>

        </form>
      </Paper>
    </div>

  );
}



