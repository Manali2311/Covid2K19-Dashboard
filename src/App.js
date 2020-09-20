import React from 'react';
import {Cards , Chart , CountryPicker} from './Components';
import style from './App.module.css';
import { fetchdata } from './api';

class App extends React.Component{
  state={
    data :{},
    country:""
  }

async componentDidMount(){
  const fetchdataa = await fetchdata();
 
  this.setState({
    data:fetchdataa
  });
}

handlecountrychange = async(country)=>
{
  const fetchdataa = await fetchdata(country);
  this.setState({
    data:fetchdataa,
    country:country
  });
}

  render(){
    const {data , country} = this.state;
  return (
    <div className={style.container}>
    <Cards data={data}/>
    <CountryPicker handlecountrychange={this.handlecountrychange} />
    <Chart data={data} country={country} />
    </div>
  )
  }
}

export default App;
