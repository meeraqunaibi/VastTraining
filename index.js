import { DataBaseConnection } from "./singleton/DatabaseConnection.js";
import { Weather } from "./observer/Weather.js";
import { WeatherDisplay } from "./observer/WeatherDisplay.js";
import { ForecastDisplay } from "./observer/ForecastDisplay.js";
import { Employee } from "./composite/Employee.js";
import { Team } from "./composite/team.js";
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
// const weather = new Weather();
// new WeatherDisplay(weather);
// new ForecastDisplay(weather);
// weather.setTemperature("35c")

//Composite Pattern
// const employee1 = new Employee(546, "Ali", "back-end developer")
// const employee2 = new Employee(914, "Sami", "front-end developer")
// const employee3 = new Employee(357, "Deema", "back-end developer")
// const backEndTeam = new Team();
// const FrontEndTeam = new Team();
// backEndTeam.addEmployee(employee1);
// backEndTeam.addEmployee(employee3);
// FrontEndTeam.addEmployee(employee2);
// console.log(backEndTeam);
// console.log(FrontEndTeam);