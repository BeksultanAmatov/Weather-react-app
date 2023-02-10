import './main-page.css';
import LeftSide from '../left-side/left-side';
import RightSide from '../right-side/right-side';
import { useState } from 'react';

const Mein = ()=>{
    const [weather, setWeather] = useState([])

    return(
        <div className="main">
            <LeftSide weather={weather} setWeather={setWeather}/>
            <RightSide weather={weather} setWeather={setWeather}/>
        </div>
    )
}
export default Mein;