
export class Weather {
    observers = new Array();
    temperature = "30c";

    setTemperature(temperature) {
        this.temperature = temperature;
        this.notifyAllObservers();
    }
    getTemperature() {
        return this.temperature;
    }
    notifyAllObservers() {
        this.observers.map(observer => observer.update());
    }
}