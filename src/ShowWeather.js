import React from "react";

class ShowWeather extends React.Component{
   render(){
     return(
        <>
               <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                    {this.props.cities.map((city, index) => {
                      return(
                            <>
                              {city &&  <div text={city} index={index} className="card mr-3 my-1 col-xs-12 col-sm-3 col-lg-3 border border-secondary py-2">
                                   <h3 className="">{city.city}</h3>
                                   <img style={{width: "60%", height: "60%"}} className="weatherApp" src={city.img} />
                                   <span className="display-4">{city.temp + "°"}</span>
                                   {/*<button type="button" onClick={this.props.deleteCity} className="btn btn-warning my-3 py-3"><strong>Delete City</strong></button>*/}
                                 </div>}
                             </>
                       )
                     }
                    )}
              </div>
        </>
     )

   }
}

export default ShowWeather;
