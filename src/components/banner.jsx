import React from 'react'
import '../App.css';

export const Banner = () => {
    return (

        <div className="banner">
            <div className="bannerContent">
                <form >
                    <div className="formContent">
                        <div className="city">
                            <label htmlFor="">Where
                            </label>
                            <div className='cityInput'>
                                <input type="text" placeholder='City, airport, address, hotel' />
                            </div>
                        </div>
                        <div className="city">
                            <label htmlFor="">From
                            </label>
                            <div>
                                <input type="datetime-local" defaultValue="2018-06-12T19:30" />
                            </div>
                        </div>
                        <div className="cityLast city">
                            <label htmlFor="">Until
                            </label>
                            <div>
                                <input type="datetime-local" defaultValue="2018-06-12T19:30" />
                            </div>
                        </div>
                        <div className="search">
                            <button><img src="./images/svgexport-13.svg" alt="" /></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
