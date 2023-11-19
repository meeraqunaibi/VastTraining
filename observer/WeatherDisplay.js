import { Observer } from "./Observer.js";
export class WeatherDisplay extends Observer {
    constructor(weather) {
        super(weather);
        this.weather.observers.push(this);
    }
    update() {
        console.log("temperature changes to ", this.weather.getTemperature());
    }
}