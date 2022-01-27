import { useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import * as Routes from '../../routes/index'
import RefreshIcon from '@mui/icons-material/Refresh';
import { ProjectsData, TeamData } from '../../interfaces';
import { GET_PROJECTS } from '../../graphql/projects';
import { Loading } from '../../hooks';
import dashboardStyles from './dashboard.module.scss'
import * as colors from '../../constants/colors'

interface Props {

}


export const Dashboard = (props: Props) => {
  const [projectData, setProjectData]: any = useState([])
  const [superUser, setSuperUser]: any = useState(true)
  const [teamData, setTeamData]: any = useState([])
  const { data, loading, error } = useQuery<ProjectsData>(GET_PROJECTS);

  useEffect(() => {
    console.log("finding user")

    if (data && data?.Projects) {
      console.log("projects found", data.Projects)
      setProjectData(data.Projects)
    };

    if (error) {
      console.log("error", error)
    }

  }, [data, error, loading])

  while (loading) {
    return <><Loading /><p>Looking for Projects</p></>
  }

  const approveProject = () => {

  }

  const rejectProject = () => {
    console.log("reject")
  }

  const getDate = (date: string) => {
    var today = new Date(date);
    var day = today.getDate() + "";
    var month = (today.getMonth() + 1) + "";
    var year = today.getFullYear() + "";
    var hour = today.getHours() + "";
    var minutes = today.getMinutes() + "";
    var seconds = today.getSeconds() + "";

    day = checkZero(day);
    month = checkZero(month);
    year = checkZero(year);
    hour = checkZero(hour);
    minutes = checkZero(minutes);
    seconds = checkZero(seconds);
    var ampm = hour >= "12" ? 'pm' : 'am';

    console.log(day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds);

    function checkZero(dateObj: string) {
      if (dateObj.length == 1) {
        dateObj = "0" + dateObj;
      }
      return dateObj;
    }
    return <div className={dashboardStyles.table_data}>{day + "-" + month + "-" + year + ", " + hour + "" + ampm}</div>
  }

  console.log(data)
  return (
    <Paper sx={{ maxWidth: 1400, margin: 'auto', overflow: 'hidden' }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon color="inherit" sx={{ display: 'block' }} />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search for projects"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: 'default' },
                }}
                variant="standard"
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
              >
                <Link to={Routes.ADDPROJECT}>Create Project</Link>
              </Button>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        <ul className={dashboardStyles.projectList}>
          <li className={dashboardStyles.table}>
            <div className={dashboardStyles.table_header}>
              <div className={dashboardStyles.header__item}><a className={dashboardStyles.header__item} href="#"></a></div>
              <div className={dashboardStyles.header__item}><a className={dashboardStyles.header__item} href="#">Status</a></div>
              <div className={dashboardStyles.header__item}><a className={dashboardStyles.header__item} href="#">Title</a></div>
              <div className={dashboardStyles.header__item}><a className={dashboardStyles.header__item} href="#">Beschrijving</a></div>
              <div className={dashboardStyles.header__item}><a className={dashboardStyles.header__item} href="#">Repository</a></div>
              <div className={dashboardStyles.header__item}><a className={dashboardStyles.header__item} href="#">Prijs</a></div>
              <div className={dashboardStyles.header__item}><a className={dashboardStyles.header__item} href="#">Aantal Developers</a></div>
              <div className={dashboardStyles.header__item}><a className={dashboardStyles.header__item} href="#">Start datum</a></div>
              <div className={dashboardStyles.header__item}><a className={dashboardStyles.header__item} href="#">Eind datum</a></div>
              <div className={dashboardStyles.header__item}><a className={dashboardStyles.header__item} href="#"></a></div>

            </div>
          </li>
          {projectData ?
            projectData.map((element: { teamSizeReq: number, id: number, title: string, desc: string, projectOwner: string, state: string, price: number, repository: string, createdOn: string, startingOn: string, endingOn: string }) => {
              return (
                <li>
                  <div className={dashboardStyles.container}>
                    <div className={dashboardStyles.table}>
                      <div className={dashboardStyles.table_content}>
                        <div className={dashboardStyles.table_row}>
                          <div className={dashboardStyles.header__item}><a className={`${dashboardStyles.header__item} ${dashboardStyles.approve}`} href="#">Goedkeuren</a></div>
                          <div className={dashboardStyles.table_data}>{element.state}</div>
                          <div className={dashboardStyles.table_data}>{element.title}</div>
                          <div className={dashboardStyles.table_data}>{element.desc}</div>
                          <div className={dashboardStyles.table_data}><a href={element.repository}>github Repo</a></div>
                          <div className={dashboardStyles.table_data}>{element.price}€</div>
                          <div className={dashboardStyles.table_data}>{element.teamSizeReq}</div>
                          {getDate(element.startingOn)}
                          {getDate(element.endingOn)}
                          <div className={dashboardStyles.header__item}><a className={`${dashboardStyles.header__item} ${dashboardStyles.reject}`} href="#">Afkeuren</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )
            }) : ""}
        </ul>

      </Typography>
    </Paper>
  );

}