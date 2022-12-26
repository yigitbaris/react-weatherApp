const HavaDurumu = (props) => {
    const { weather } = props;

    if (!weather) {
        return <p>Yükleniyor</p>
    }

    return (
        <view>
            <p style={{ flex: 1, textAlign: "center" }}>Weather</p>
            <article class="widget">

                <div class="weatherIcon"></div>
                <div class="weatherData">
                    <h1 class="temperature">{Math.round(weather.main.temp)}&deg;C</h1>
                    <h2 class="description">{weather.weather.map(data => data.description).join(", ")}</h2>
                    <h3 class="city">{weather.name}</h3>
                </div>
                <div class="date">
                    <h4 class="month" id="month"></h4>
                    <h5 class="day" id="day">{new Date(weather.dt * 1000).toLocaleDateString()}</h5>
                </div>
                {/* <div>
                <h3>{weather.name} </h3>
                <h4>{weather.weather.map(data => data.description).join(", ")} </h4>
                <p>{weather.main.temp} °C </p>
                <p>{new Date(weather.dt * 1000).toLocaleDateString()} </p>
            </div> */}
            </article>
        </view>
    )
}

export default HavaDurumu;