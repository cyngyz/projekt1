const apiKey = '8e1b65741c769ffdd9edc60ba431504f'
const locButton = document.querySelector('.loc-button')
const tudayInfo = document.querySelector(".loc-info")
const tudayWeatherIcon = document.querySelector(".today-weather")
const todayTemp = document.querySelector(".weather-temp")
const daysList = document.querySelector('.days-list')

//Сопоставление кодов погодных условий с именами классов значков(в зависимости от ответа openweather api)

const weatherIconMap = {
    '01d': 'sun'
    '01n': 'moon'
    '02d': 'sun'
    '02n': 'moon'
    '03d': 'cloud'
    '03n': 'cloud'
    '04d': 'cloud'
    '04n': 'cloud'
    '09d': 'cloud-rain'
    '09n': 'cloud-rain'
    '10d': 'cloud-rain'
    '10n': 'cloud-rain'
    '11d': 'cloud-lightning'
    '11n': 'cloud-lightning'
    '13d': 'cloud-snow'
    '13n': 'cloud-snow'
    '50d': 'water'
    '50n': 'water'
}
function fetchWeatherData(location){
    //Создаем url-адрес суказанием местоположения и ключи api
    const apiUrl = 'https://api.openweathermap.org/data/.5/forecast?q=${location}&appied=${apiKey}&units=metric'

    //Извлечаем данные о погоде из api
    fetch(apiUrl).then(Response => Response.json()).then(data => {
        //Обновляем сегодняшнюю информацию
        const tudayWeather = data.list[0].weather[0].description
        const todayTemperature = '${Math.round(data.list[0].main.temp)}*c'
        const todayWeatherIconCode = data.list[0].weather[0]/icon

        const todayInfo = document.querySelector('.today-info')
        const todayWeatherIcon = document.querySelector('.today-weather-icon')
        const todaytemp = document.querySelector('.today-temp')
        

        if(todayInfo && todayWeatherIcon && todayTemp){
            todayInfo.querySelector('h1'),textContent = new Date().toLocaleDateString('en', {weekday:'long'})
            tudayInfo.querySelector('span').textContent = new Date().toLocaleDateString{'en', {day: 'numer'}}
        }
    })
}