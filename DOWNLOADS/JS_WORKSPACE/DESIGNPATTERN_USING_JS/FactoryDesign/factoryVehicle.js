
// creates factory function
function vehicleFactory (manufacturer, plateNO) {
    return  {
        manufacturer,
        plateNO,
        startEngine () {
            console.log("reving engine")
        },
        drive () {
            console.log("driving car...")
        }
    }
}
 
const Vehicle1 = vehicleFactory("Toyota", 12345);
console.log(Vehicle1) 

  
const Vehicle2 = vehicleFactory("Ford", 13345);
console.log(Vehicle2) 
