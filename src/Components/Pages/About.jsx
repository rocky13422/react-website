import React from "react";
import TwoColumn from "../TwoColumn";
import aboutImage from '../../assets/creativity.svg'
const About = () => {
    return (
        <>
         <TwoColumn
             title='Improving your business ROI in technology and resilience'
             desc='We bring deep digital, technology and cyber security skills that help your business perform without compromise.'
             btnText='Contact Us'
             image={aboutImage}
             uniqueClass='about-page'
            />
        </>
    )
}
export default About;