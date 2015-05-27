function Thermostat(){
this.temp = 20;
this.powerSavingMode = true;
this.minTemperature = 10;
// this.maxTemperature = 25;
};

Thermostat.prototype.currentTemperature = function() {
  return this.temp;
};
Thermostat.prototype.upButton = function() {
  if (this.temp < this.maxTemperature()) {
    this.temp = this.temp + 1;
  }
};
Thermostat.prototype.downButton = function() {
  if (this.temp > this.minTemperature) {
    this.temp = this.temp - 1;
  }
};
Thermostat.prototype.resetButton = function() {
  this.temp = 20;
};
Thermostat.prototype.powerSaving = function() {
  return this.powerSavingMode;
};
Thermostat.prototype.powerSavingOn = function() {
  this.powerSavingMode = true;
  this.temp = Math.min(this.temp, this.maxTemperature());
};
Thermostat.prototype.powerSavingOff = function() {
  this.powerSavingMode = false;
};
Thermostat.prototype.maxTemperature = function() {
  if (this.powerSavingMode) {
    return 25;
  }
  else {
    return 32;
  };
};

thermos = new Thermostat;