import React from "react";
import { useNavigate } from "react-router-dom";
const TwoColumn = ({title,desc,btnText,image,uniqueClass}) => {
    const history = useNavigate();
     return (
         <>
           <div className={`container mb-5 mt-5 ${uniqueClass}`}>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1>{title}</h1>
                        <p className="mt-3 mb-4">{desc}</p>
                        <button type="button" className="btn btn-primary btn-rounded" onClick = { () => history('/contact')}>{btnText}</button>
                    </div>
                    <div className="col-md-6 image-col text-center">
                        <img src={image} className='img-fluid animated' alt='Home Image' />
                    </div>
                </div>
            </div>
         </>
     )
}
export default TwoColumn;