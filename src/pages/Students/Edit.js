import React from 'react';
import { Paper, Typography } from '@mui/material';
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


export default function Edit() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.page_title} variant="h3" color="initial">Submit New Student</Typography>
      <Typography className={classes.page_subtitle} variant="" color="initial">Welcom to our foundition </Typography>

      <Paper className='paperilement'>
        <div className='aaaa'>
          sdfsd
        </div>
      </Paper>
    </div>

  );
}



