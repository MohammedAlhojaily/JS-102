class Vehicle {
    constructor(name, manufacturer, id) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.id = id;
    }
  }
  
  class Car extends Vehicle {
    constructor(name, manufacturer, id, type) {
      super(name, manufacturer, id);
      this.type = type; 
    }
  }
  
  class Airplane extends Vehicle {
    constructor(name, manufacturer, id, airplaneType) {
      super(name, manufacturer, id);
      this.airplaneType = airplaneType;
    }
  }
  
  class Employee {
    constructor(name, id, dateOfBirth) {
      this.name = name;
      this.id = id;
      this.dateOfBirth = dateOfBirth;
    }
  }
  
  class Driver extends Employee {
    constructor(name, id, dateOfBirth, licenseId) {
      super(name, id, dateOfBirth);
      this.licenseId = licenseId;
    }
  }
  
  class Pilot extends Employee {
    constructor(name, id, dateOfBirth, licenseId) {
      super(name, id, dateOfBirth);
      this.licenseId = licenseId;
    }
  }
  
  class Reservation {
    constructor(reservationDate, employeeId, vehicleId, reservationId) {
      this.reservationDate = reservationDate;
      this.employeeId = employeeId;
      this.vehicleId = vehicleId;
      this.reservationId = reservationId;
    }
  }
  
  let Car1 = new Car("Car1", "Hyundai", "C-101", "gas");
  let Car2 = new Car("Car2", "Tesla", "C-102", "electric");
  let Car3 = new Car("Car3", "Toyota", "C-103", "gas");
  let Airplane1 = new Airplane("Airplane1", "Airbus", "A-101", "Commercial");
  let Airplane2 = new Airplane("Airplane2", "Boeing", "A-102", "Commercial");
  
  let driver = new Driver("Abdullah AlAjmi", "E-101", "1990-02-12", "KSA235");
  let pilot = new Pilot("Mohammed Alhojaily", "E-102", "1980-05-10", "KSA221");
  
  let reservations = [];
  
  function makeReservation(employee, vehicle) {
    if ((employee instanceof Pilot && vehicle instanceof Car) || 
        (employee instanceof Driver && vehicle instanceof Airplane)) {
      console.log("Incompatible assignment.");
    } else {
      let reservationId = reservations.length + 1;
      let newReservation = new Reservation(new Date(), employee.id, vehicle.id, reservationId);
      reservations.push(newReservation);
      console.log("Reservation made successfully. Reservation ID: " + reservationId);
    }
  }
  
  makeReservation(driver, Car1);
  makeReservation(pilot, Airplane1);
  
  reservations.map(reservation => {
    console.log(`Reservation ID: ${reservation.reservationId}, Employee ID: ${reservation.employeeId}, Vehicle ID: ${reservation.vehicleId}`);
  });
  