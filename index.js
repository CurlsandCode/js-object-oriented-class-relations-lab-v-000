let store = {drivers:[], passengers:[], trip:[]}

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

