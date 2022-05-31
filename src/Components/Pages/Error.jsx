import React from "react";
import { useNavigate } from "react-router-dom";
const Error = () => {
    const history = useNavigate();
    return (
        <>
        <div className="container mb-5 mt-5">
             <div className="row">
                <h1>I am Error page</h1>
                <button className="btn btn-primary" onClick={() => history('/home')}>Go To Home</button>
             </div>
         </div>
        </>
    )
}
export default Error;