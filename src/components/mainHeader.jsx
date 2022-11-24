import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';



export const MainHeader = () => {
  return (
    <div className='header'>
      <div className="logoContainer">
        <img className='logo' src="images/logo.svg" alt="dsad" />
      </div>
      <div className="button">
        <button className="headerBtn">Become a host</button>
        <div className="menu">


          <Dropdown >
            <Dropdown.Toggle variant="transparent " >
              <img src="images/svgexport-2.svg" />
              <img src="images/svgexport-3.svg" />
            </Dropdown.Toggle>

            <Dropdown.Menu id="dropdownMenu">
              <Dropdown.Item href="#/action-1"> Login</Dropdown.Item>
              <Dropdown.Item href="#/action-2">  Sign Up</Dropdown.Item>
              <Dropdown.Item href="#/action-3"> <img src="images/svgexport-5.svg" /> Become a host</Dropdown.Item>
              <Dropdown.Item href="#/action-3"><hr /></Dropdown.Item>
              <Dropdown.Item href="#/action-3"><img src="images/svgexport-6.svg" /> How Turo works</Dropdown.Item>
              <Dropdown.Item href="#/action-3"><img src="images/svgexport-7.svg" /> Contact support</Dropdown.Item>
              <Dropdown.Item href="#/action-3"><img src="images/svgexport-8.svg" /> Legal</Dropdown.Item>
              <Dropdown.Item href="#/action-3"> <img src="images/svgexport-9.svg" />Insurance & protection</Dropdown.Item>
              <Dropdown.Item href="#/action-3"> <img src="images/svgexport-10.svg" />Host tools</Dropdown.Item>
              <Dropdown.Item href="#/action-3"> <img src="images/svgexport-11.svg" />Calculator</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </div>
      </div>
    </div>
  )
}
