import { DataBaseConnection } from "./singleton/DatabaseConnection.js";
import { Weather } from "./observer/Weather.js";
import { WeatherDisplay } from "./observer/WeatherDisplay.js";
import { ForecastDisplay } from "./observer/ForecastDisplay.js";
//Singleton Design Pattern
// const connection = DataBaseConnection.getInstance("data");
// const connection0 = new DataBaseConnection("Me");
// const connection1 = DataBaseConnection.getInstance("Meera");
// const connection2 = DataBaseConnection.getInstance("Aya");
// const connection3 = DataBaseConnection.getInstance("Mays");

// console.log(connection1);
// console.log(connection2);
// console.log(connection);


//Observer Pattern 

const weather = new Weather();
new WeatherDisplay(weather);
new ForecastDisplay(weather);

weather.setTemperature("35c")
