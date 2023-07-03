import React, { useState } from "react"
import  style from "./weather.module.css"
import pic from "./cloud.png"
// import pic1 from "./humidity.jpeg"
import axios from "axios"
// import pic2 from "./wind.jpeg"
const Weather=()=>{
    let[data,setData]=useState({
        celcius:21,
        name:'Anusha',
        humidity:70,
    })
    let[name,setName]=useState()

 const handleclick=()=>{
    if(name !==""){
        const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=c3168a460db505026533806b4cf7acfc&units=metric`
        axios.get(apiurl)
        .then(result=>{
            console.log(result.data)
            setData({...data,
                celcius: result.data.main.temp, 
                name: result.data.name,
            humidity: result.data.main.humidity,
       
        })
        // .catch(error=>{console.log(error)})
        })
        // .catch(error=>{console.log(error)})
    }
 }
    return(
        <div id={style.nav}>
            <div id={style.form}>
                <div id={style.search}>
                    <input type="text" placeholder="enter city name" onChange={e=>{setName(e.target.value)}}/>
                    <button> <i class="fa-solid fa-magnifying-glass"onClick={handleclick}></i></button><br />

                </div>
                <div id={style.wind}>
                    <img src={pic} alt="" />
                </div>
                <div id={style.cloud}>
                <h1>{Math.round(data.celcius)}°C</h1>
                <h1>{data.name} </h1>
                </div>
                  <div id={style.humidity}>
                    {/* <img src={pic1} alt="" /> */}
                    <p>{Math.round(data.humidity)}%</p>  
                    <h1>humidity</h1>
                  </div>
                  
            </div>

        </div>
    )
}
export default Weather