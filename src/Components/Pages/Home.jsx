import React from "react";
import HomeImage from '../../assets/programming.svg'
import TwoColumn from "../TwoColumn";
const Home = () => {
    return (
        <>
            <TwoColumn
             title='Get Better with Help from RH Infotech'
             desc='What good is ‘industry leading’ software if it isn’t an ideal fit for your unique needs? Don’t worry, we can build you the perfect solution by customizing Hubspot’s design and functionality, while simultaneously ensuring a smooth integration with existing tools. You ask - we deliver. It’s simply better.'
             btnText='Learn More'
             image={HomeImage}
             uniqueClass='home-page'
            />
        </>
    )
}
export default Home;