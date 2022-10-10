import React from 'react'

export default function About() {
  return (
    <div className="w3-container mb-5"  id="about">
            <h3 className="mb-4 w3-center w3-xlarge"><b>ABOUT THE COMPANY</b></h3>
            <p className="w3-center w3-xlarge"><b>Key features of our company</b></p>
            <div className="w3-row-padding w3-center py-10" style={{marginTop:"64px",backgroundColor:"white"}}>
                <div className="w3-quarter mb-2 px-2 py-3 border-success" style={{border:"1px solid black",borderRadius:"5%"}}>
                    <i className="fa fa-desktop w3-margin-bottom w3-jumbo"></i>
                    <p className="w3-large">Responsive</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore.</p>
                </div>
                <div className="w3-quarter mb-2 px-2 py-3 border-danger" style={{border:"1px solid black",borderRadius:"5%"}}>
                    <i className="fa fa-eye w3-margin-bottom w3-jumbo"></i>
                    <p className="w3-large">Safety</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore.</p>
                </div>
                <div className="w3-quarter mb-2 px-2 py-3 border-info" style={{border:"1px solid black",borderRadius:"5%"}}>
                    <i className="fa fa-diamond w3-margin-bottom w3-jumbo"></i>
                    <p className="w3-large">Design</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore.</p>
                </div>
                <div className="w3-quarter px-2 py-3 border-primary" style={{border:"1px solid black",borderRadius:"5%"}}>
                    <i className="fa fa-hourglass w3-margin-bottom w3-jumbo"></i>
                    <p className="w3-large">Punctual</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore.</p>
                </div>
            </div>
        </div>
  )
}
