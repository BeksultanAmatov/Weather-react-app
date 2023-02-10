import './left-side.css';
import SearchBar from './search-bar';

const LeftSide = (props) =>{
    return(
        <div className="back-wall">
            <SearchBar weather={props.weather} setWeather={props.setWeather}/>
        </div>
    )
}
export default LeftSide;