let store = {drivers:[], passengers:[], trips:[]};

let driverId = 0
class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name;

    store.drivers.push(this)
  }
  trips(){
     return store.trips.filter(trip => {
       return trip.driverrId === this.id;
     })
   }

   drivers(){
     return this.trips().map(trip => {
       return trip.passenger();
     })
}

let passengerId = 0
class Passenger {
  constructor(name){
    this.id = ++passengerId
    this.name = name;

    store.passengers.push(this)
  }
  trips(){
    return store.trips.filter(trip => {
      return trip.passengerId === this.id;
    })
  }

  drivers(){
    return this.trips().map(trip => {
      return trip.driver();
    })
}

let tripId = 0
class Trip {
  constructor(driver, passenger){
    this.id = ++tripId
    if(driver){
      this.driverId = driver.id
    }
    if(passenger){
      this.passengerId = passenger.id
    }
     store.trips.push(this)
  }
  setDriver(driver){
   this.driverId = driver.id
 }
 setPassenger(passenger){
   this.passengerId = passenger.id
 }
    driver(){
    return store.drivers.find(function(driver){
      return driver.id === this.driverId;
    }.bind(this))
    passenger(){
    return store.passengers.find(function(passenger){
      return passsenger.id === this.passengerId;
    }.bind(this))
}