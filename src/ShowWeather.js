import React from "react";

class ShowWeather extends React.Component{
   render(){
     return(
        <>
               <div style={{display: "flex", marginTop: "3vw", flexDirection: "row", flexWrap: "wrap"}}>
                    {this.props.cities.map((city, index) => {
                      return(

                            <div key={index} className="test card mr-3 my-1 col-xs-12 col-sm-3 col-lg-3 border border-secondary py-2">
                                   <h3 index={index} className="cityTitle">{city.city}</h3>
                                   <img style={{width: "60%", height: "60%"}} className="weatherApp" src={city.img} />
                                   <span className="display-4">{city.temp + "°"}</span>
                                   <span ident={index} onClick={this.props.deleteCity} className="deleteButton">&times;</span>
                              </div>
                       )
                     }
                    )}
              </div>
        </>
     )

   }
}

export default ShowWeather;
