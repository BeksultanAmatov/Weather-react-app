import './data-day.css';

const DataDay =(props)=>{
    console.log(props.weather)
    return(
        <div className="data-day">
            <h2>{props.weather?.name}</h2>
        </div>
    )
}
export default DataDay;