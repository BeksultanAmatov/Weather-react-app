import './right-side.css';
import DataDay from './data/data-day';
import Prognoze from './content/prognoze';
import Footer from './footer/footer';

const RightSide =(props)=>{
    return(
        <div className="right-side">
            <DataDay weather={props.weather} setWeather={props.setWeather}/>
            <Prognoze weather={props.weather} setWeather={props.setWeather}/>
            <Footer />
        </div>
    )
}
export default RightSide;