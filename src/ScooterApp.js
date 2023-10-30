const User = require("./User");
const Scooter = require("./Scooter");

class ScooterApp {
  constructor() {
    this.stations = {
      "Station A": [],
      "Station B": [],
      "Station C": [],
    };
    this.registeredUsers = {};
  }

  ////////////// User Register
  registerUser(username, password, age) {
    if (this.registeredUsers.hasOwnProperty(username)) {
      console.log("already registered");
    }

    if (age < 18) {
      console.log("too young to register");
    }

    const newUser = new User(username, password, age);
    this.registeredUsers[username] = newUser;
    console.log(`${username} has been registered.`);
    return newUser;
  }

  ////////////// User Login
  loginUser(username, password) {
    if (this.registeredUsers.hasOwnProperty(username)) {
      const user = this.registeredUsers[username];
      if (user.password === password) {
        user.login();
        console.log(`${username} has been logged in.`);
      } else {
        throw new Error("Username or password is incorrect.");
      }
    } else {
      throw new Error("no such user is logged in");
    }
  }


  ////////////// User logout
  logoutUser(username) {
    const user = this.registeredUsers[username];
    user.logout();
  }

  ////////////// create scooter
  createScooter(station) {
    if (this.stations.hasOwnProperty(station)) {
      const newScooter = new Scooter(station, null, 100, false);
      this.stations[station].push(newScooter);
      console.log(`Created a new scooter at ${station}.`);
      return newScooter;
    } else {
      throw new Error("No such station.");
    }
  }
  

  dockScooter(scooter, station) {

  }

}

module.exports = ScooterApp;
