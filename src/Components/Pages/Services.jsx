import React from "react";
import ServicesData from './ServicesData';

function sData(currElem, index) {
    return (
        <>
            <div className="col-md-4 mb-3" id={`item-${index}`} key={`item-${index}`}>
                <div className="card">
                    <img className="card-img-top" src={currElem.image} alt="Card image Cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">{currElem.title}</h5>
                        <p className="card-text">{currElem.descr}</p>
                        <a href="#" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        </>
    )
}

const Services = () => {
    return (
        <>
            <div className="container mb-5 mt-5">
                <div className="row">
                    {ServicesData.map(sData)}
                </div>
            </div>
        </>
    )
}
export default Services;