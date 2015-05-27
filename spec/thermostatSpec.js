describe("Thermostat", function(){
  var thermy;
  describe('temperature is', function(){
    it('20 by default', function(){
      thermy = new Thermostat();
      expect(thermy.currentTemperature()).toEqual(20);
    });

  });

});