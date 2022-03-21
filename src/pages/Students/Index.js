import { React, useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Button, Menu, MenuItem, IconButton } from '@mui/material';
import { Delete, Search, Add, Payment, KeyboardArrowDown, Visibility, MoreVert } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'
import './student.css';


const useStyles = makeStyles((theme) => ({

  root: {
    borderRadius: '15px',
    padding: '7px 20px',
  },

  page_title: {
    fontWeight: '600',
    marginLeft: '3rem',
  },

  DataGridComp: {
    height: 600,
    width: '100%'
  },
  btnstabel: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  rightbtns: {
    marginBottom: '3rem',
    marginRight: '3rem',
    '& > *': {
      margin: theme.spacing(1),

    },
  },

  button: {
  },
  buttonerror: {
    background: theme.palette.error.main,
  },
  buttonwarning: {
    background: theme.palette.warning.main,
    '&:hover': {
      background: theme.palette.warning.dark,
    }
  },
  buttoninfo: {
    background: theme.palette.info.main,
  },
  buttonseccess: {
    background: theme.palette.success.main,
  },

}));







const columns = [
  {
    field: 'id',
    flex: 1,
    headerName: 'ID',
    width: 90
  },
  {
    field: 'FirstName',
    flex: 1,
    headerName: 'First name',
    width: 200,
    editable: true,
  },
  {
    field: 'LastName',
    flex: 1,
    headerName: 'Last name',
    width: 200,
    editable: true,
  },

  {
    field: 'Gander',
    flex: 1,
    headerName: 'Gander',
    width: 200,
    editable: true,
  },
  {
    field: 'Level',
    flex: 1,
    headerName: 'Level',
    width: 200,
    editable: true,
  },
  {
    field: 'Course',
    flex: 1,
    headerName: 'Course',
    width: 200,
    editable: true,
    disableColumnMenu: true,

  },
  {
    field: 'Actions',
    headerName: 'Actions',
    flex: 1,
    disableColumnMenu: true,
    width: 200,
    editable: false,
    textAlign: 'center',
    renderCell: (cellvalue) => {
      return (
        <div
          style={{
            textAlign: 'right',
            width: '100%',
          }}
        >{cellvalue.value}
          <IconButton> <Visibility />  </IconButton>
          <IconButton> <MoreVert />  </IconButton>
        </div>
      )
    }
  },
];

export default function Index() {

  const classes = useStyles();
  const Navigate = useNavigate()
  const [data, setdata] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState('Select');



  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null)
    var text = e.target.innerText;
    if (text === "") {
      setAnchorE2("Select")
    } else {
      setAnchorE2(e.target.innerText)
      console.log(e.target.innerText)
    }
  };


  useEffect(() => {
    fetch('http://localhost:800/students')
      .then(res => res.json())
      .then(data => setdata(data))
  }, [])


  return (

    <div>
      <Typography className={classes.page_title} variant="h3" color="initial">title</Typography>
      <Paper className='paperilement'>

        {/* content above the tabel section*/}
        <div className={classes.btnstabel}>
          {/* the search feild  */}
          <div className='search'>
            < div className='bfeild'>
              <div className='serchtype'>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(event) => handleClick(event)}>
                  {anchorE2} <KeyboardArrowDown />
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem value="Firstname" onClick={(e) => handleClose(e)}>FirstName</MenuItem>
                  <MenuItem value="Firstname" onClick={(e) => handleClose(e)}>Course</MenuItem>
                  <MenuItem value="Firstname" onClick={(e) => handleClose(e)}>Level</MenuItem>
                </Menu>
              </div>
              <div className='inputfeild'>
                <input placeholder='Search..'
                  id="standard-basic" label="Standard" />
              </div>
            </div>
            <div className='searchIcon'>
              <IconButton className='Icon' color="inherit"> <Search /> </IconButton>
            </div>
          </div>

          {/* btns in the right  */}
          <div className={classes.rightbtns}>
            <Button
              onClick={() => { Navigate("/students/create") }}
              color='primary'
              variant="contained"
              classes={classes}
              className={classes.button}
              startIcon={<Add />}
            > Add new
            </Button>
            <Button
              color='secondary'
              variant="contained"
              classes={classes}
              className={classes.button}
              startIcon={<Payment />}
            > Subscriptions
            </Button>
            <Button
              color='primary'
              classes={classes}
              variant="contained"
              className={classes.buttonwarning}
              startIcon={<Delete />}
            > Delete
            </Button>
          </div>
        </div>
        <div className={classes.DataGridComp}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={9}
            checkboxSelection
            disableSelectionOnClick

          />
        </div>
      </Paper>
    </div>
  )
}
