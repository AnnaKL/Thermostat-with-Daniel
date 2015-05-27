function Thermostat(){
this.temp = 20;
};

Thermostat.prototype.currentTemperature = function() {
  return this.temp;
};