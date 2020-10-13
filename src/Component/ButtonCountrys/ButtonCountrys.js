import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function ButtonCountrys() {
  const [user, setUser]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
    
    console.log(user.length);
  
  
  const [countrys,setCountrys]=useState([])

  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>setCountrys(data))
    .catch(error=>console.log(error))
  } ,[])

  console.log(countrys);
  const classes = useStyles();
  const history=useHistory()
  const btnHandel=()=>{
      history.push('/abc')
  }
  
  return (
    <div className={classes.root}>
      <h1>country loaded : {countrys.length}</h1>
      
      {
        countrys.map(country=><Button onClick={btnHandel} variant="contained">{country.name}</Button>)
      }

    </div>
  );
}

export default ButtonCountrys;