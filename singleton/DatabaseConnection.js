export class DataBaseConnection {
    static connection = null;
    static isObjectInitialized = false;
    constructor(data) {
        if(!DataBaseConnection.isObjectInitialized) {
            this.data = data;
            DataBaseConnection.isObjectInitialized = true;
            return ;
        }
        console.log("Object is already Initialized!");
    }
    static getInstance(data) {
        if (this.connection) {
            console.log("using existing object");
            return this.connection;
        }
        this.connection = new DataBaseConnection(data);
        console.log("first initialization");

        return this.connection;
    }

}