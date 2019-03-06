import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavList from "./Navlist";
import {Route, BrowserRouter, Redirect} from "react-router-dom";
import Form from "./Form";
import ShowWeather from "./ShowWeather";
import axios from 'axios';
import Messages from "./Messages";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     cityName: "", cityNameArray: [], cities: [], formsubmitted: false, doubleText: false
    }
  }

  getCity(event){
    event.preventDefault();
     //this.setState({loading: true})
     const authToken = '16d4785f9c10724266053adb3c29dcfd';
     axios.post(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&APPID=${authToken}`)
     .then(res => {
       console.log(res);
       console.log(res.data);

       let temtCityArray = [...this.state.cityNameArray];
       temtCityArray.push(this.state.cityName);

       let objects = {city: res.data.name,
                      img: `http://openweathermap.org/img/w/${res.data.weather[0].icon}.png`,
                      temp: Math.round(res.data.main.temp - 273)};
       let tempCities = [...this.state.cities];
       tempCities.push(objects)


        if(this.state.cityNameArray.includes(this.state.cityName)){
           this.setState({doubleText: true})
        }

        else{
           this.setState({
              cities: [...this.state.cities, objects],
              cityName: "",
              formsubmitted: true,
              doubleText: false,
              cityNameArray: temtCityArray
          })
        }

        setTimeout(() => this.setState({formsubmitted: false}), 0)
     })

  }

  updateValue(event){
    this.setState({
      cityName: event.target.value
    })
  }



  render() {
    return (
    <BrowserRouter>
     <>
        <h1 className="display-3 text-center my-5">Weather App</h1>
        <div className="container my-5">
          <div className="jumbotron">
              <Route path="/" render={() => <NavList />} />
              <Route exact path="/" render={() => <Form getCity={this.getCity.bind(this)} updateValue={this.updateValue.bind(this)} />} />
              <Messages doubleText={this.state.doubleText} />
              <Route path="/showweather" render={() => <ShowWeather doubleText={this.state.doubleText}  match={this.match} cities={this.state.cities} />} />
              {this.state.formsubmitted && <Redirect to="/showweather" />}
          </div>
        </div>
      </>
     </BrowserRouter>
    );
  }
}

export default App;
