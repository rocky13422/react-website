import React, { useEffect } from "react";
import { useState } from "react";

const Weather = () => {
    const [updateValue, initialValue] = useState('Kolkata');
    const [city, setCity] = useState();
    const [temp, setTemp] = useState();
    const [minTemp, setMintemp] = useState();
    const [maxTemo, setMaxtemp] = useState();
    const [country, setCountry] = useState();
    const [wethr, setWethr] = useState();

    const weatherRes = (e) => {
        let city = e.target.value;
        initialValue(city);
    }

    useEffect(() => {
        const fetchAPI = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${updateValue}&appid=c748a5651381f0110cdc2c5ea43cfe4a`;
            const response = await fetch(url);
            const result = await response.json();
            setCity(result.name);
            setTemp(result.main.temp);
            setMintemp(result.main.temp_min);
            setMaxtemp(result.main.temp_max);
            setCountry(result.sys.country);
            setWethr(result.weather[0].main);
        }
        fetchAPI();
    }, [updateValue])
    return (
        <>
            <div className="container mb-5 mt-5">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <div className="box">
                            <div className="box_inner">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Enter City Name</label>
                                    <input
                                        type="search"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter City"
                                        onChange={weatherRes}
                                    />
                                </div>

                                {
                                    !city ? (
                                        <div className='no-data'>
                                            <p>No Data</p>
                                        </div>
                                    ) : (
                                        <div className="result">
                                            <div className="top">
                                                <h2 className="location"><i className="fa-solid fa-location-dot"></i><span>{updateValue}</span></h2>
                                            </div>
                                            <div className="middle">
                                                <h2 className="temp"><span>{temp}</span></h2>
                                            </div>
                                            <div className="bottom">
                                                <p>Min: {minTemp} | Max: {maxTemo}</p>
                                                <div className="we-dt">
                                                    <p>Country <br />{country}</p>
                                                    <p>Weather Type <br /> {wethr}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                    <path fill="#f3f4f5" fill-opacity="1" d="M0,256L30,266.7C60,277,120,299,180,293.3C240,288,300,256,360,213.3C420,171,480,117,540,96C600,75,660,85,720,112C780,139,840,181,900,186.7C960,192,1020,160,1080,144C1140,128,1200,128,1260,112C1320,96,1380,64,1410,48L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Weather;