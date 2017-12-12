let store = {drivers:[], passengers:[] trips:[]}

let driverId = 0
class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name;

    store.drivers.push(this)
  }
}

let passengerId = 0
class Passenger {
  constructor(name){
    this.id = ++passengerId
    this.name = name;

    store.passengers.push(this)
  }
}
let tripsId = 0
class Trip {
  constructor(driver, passenger){
    this.id = ++TripId
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
}
