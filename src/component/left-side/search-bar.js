import './search-bar.css';
import {useState, useEffect} from 'react'
const SearchBar = (props) =>{
    const [city, setCity] = useState('')
    const API_KEY = '5de27f425d76955a70dcde61b01a9569'
    const URL = 'https://api.openweathermap.org/data/2.5/weather'

    useEffect(() => {
        fetch(`${URL}?q=${city}&units=metric&appid=${API_KEY}`)
            .then(responce => responce.json())
            .then(json => {
                if (json.cod == 200)
                    props.setWeather(json)
            })
            .catch(err => {
                console.log('Ошибка')
            })
    }, [city])

    return(
        <div className="search-bar">
            <input onChange={(e) => setCity(e.target.value)} type="text" placeholder="Enter location"/>
        </div>
    )
}
export default SearchBar;   