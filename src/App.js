import React, { Component } from 'react';
import './App.css';
import NavList from "./Navlist";
import {Route, BrowserRouter, Redirect, Switch} from "react-router-dom";
import Form from "./Form";
import ShowWeather from "./ShowWeather";
import axios from 'axios';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     cityName: "", cities: [], formsubmitted: false, doubleText: false
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

       let objects = {city: res.data.name.toUpperCase(),
                      img: `http://openweathermap.org/img/w/${res.data.weather[0].icon}.png`,
                      temp: Math.round(res.data.main.temp - 273)};

      let tempCityArray = [...this.state.cities, objects];
      const findCity = this.state.cities.find(city => city.city === this.state.cityName);

      if(findCity){
        this.setState({doubleText: true})
      }

      else{
                this.setState({
                cities: tempCityArray,
                cityName: "",
                formsubmitted: true,
                doubleText: false,
            })
          }



         setTimeout(() => this.setState({formsubmitted: false}), 0)
     })

  }

  updateValue(event){
    this.setState({
      cityName: event.target.value.toUpperCase()
    })
  }

  deleteCity(event){
     const buttonIndex = event.target.getAttribute("ident");
     console.log(buttonIndex);
     const copyOfCities = Object.assign([], this.state.cities);
     copyOfCities.splice(buttonIndex, 1);

     this.setState({
       cities: copyOfCities,
       doubleText: false

     })
  }



  render() {
    return (
    <BrowserRouter>
     <>
        <h1 className="logo display-3 text-center my-5">Weather App</h1>
        <div className="container my-5">
          <div className="jumbotron opac">
              <NavList />
              <Route exact path="/" render={() => <Form getCity={this.getCity.bind(this)} doubleText={this.state.doubleText} updateValue={this.updateValue.bind(this)} />} />
              <Switch>
                  <Route path="/showweather" render={() => <ShowWeather index={this.props.cities} deleteCity={this.deleteCity.bind(this)} doubleText={this.state.doubleText} cities={this.state.cities} />} />
                  {this.state.formsubmitted && <Redirect to="/showweather" />}
             </Switch>
          </div>
        </div>
      </>
     </BrowserRouter>
    );
  }
}

export default App;
