import React from "react";

const Contact = () => {
    return (
        <>
            <div className="container mb-5 mt-5">
                <div className="row">
                    <div className="col-md-7 mx-auto">
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group mt-3 mb-3">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <div className="form-group mt-3">
                                <label for="exampleFormControlTextarea1">Your Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary mt-4">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;