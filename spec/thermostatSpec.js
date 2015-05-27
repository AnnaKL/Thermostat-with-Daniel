describe("Thermostat", function(){
  var thermy;

  beforeEach(function() {
    thermy = new Thermostat();
  });

  describe('temperature is', function(){
    it('20 by default', function(){
      expect(thermy.currentTemperature()).toEqual(20);
    });
    it('increased by one when the up botton is pressed', function(){
      thermy.upButton();
      expect(thermy.currentTemperature()).toEqual(21);
    });
    it('decreased by one when the down button is pressed', function(){
      thermy.downButton();
      expect(thermy.currentTemperature()).toEqual(19);
    });
    it('reset to 20 when the reset button is pressed', function(){
      thermy.downButton();
      thermy.resetButton();
      expect(thermy.currentTemperature()).toEqual(20);
    });
  });

  describe('Power Saving mode is', function(){
    it('on by default', function(){
      expect(thermy.powerSaving()).toEqual(true);
    });
    it('off when switched off', function(){
      thermy.powerSavingOff();
      expect(thermy.powerSaving()).toEqual(false);
    });
    it('on when switched back on', function(){
      thermy.powerSavingOff();
      thermy.powerSavingOn();
      expect(thermy.powerSaving()).toEqual(true);
    });
  });

  describe('minimum temperature', function(){
    it('is 10', function(){
      thermy.downButton();
      thermy.downButton();
      thermy.downButton();
      thermy.downButton();
      thermy.downButton();
      thermy.downButton();
      thermy.downButton();
      thermy.downButton();
      thermy.downButton();
      thermy.downButton();
      thermy.downButton();
      expect(thermy.currentTemperature()).toEqual(10);
    });
  });

  describe('maximum temperature', function(){
    it('is 25 when Power Saving mode is on', function(){
     thermy.upButton();
     thermy.upButton();
     thermy.upButton();
     thermy.upButton();
     thermy.upButton();
     thermy.upButton();
     expect(thermy.currentTemperature()).toEqual(25);
    });
    it('is 32 when Power Saving mode is off', function(){
      thermy.powerSavingOff();
      thermy.upButton();
      thermy.upButton();
      thermy.upButton();
      thermy.upButton();
      thermy.upButton();
      thermy.upButton();
      thermy.upButton();
      thermy.upButton();
      thermy.upButton();
      thermy.upButton();
      thermy.upButton();
      thermy.upButton();
      thermy.upButton();
      thermy.upButton();
      thermy.upButton();
      expect(thermy.currentTemperature()).toEqual(32);
    });
    it('is pushed back down to 25 if above that when Power Saving turns on', function(){
      thermy.powerSavingOff();
      thermy.upButton();
      thermy.upButton();
      thermy.upButton();
      thermy.upButton();
      thermy.upButton();
      thermy.upButton();
      thermy.upButton();
      thermy.upButton();
      thermy.upButton();
      thermy.upButton();
      thermy.upButton();
      thermy.powerSavingOn();
      expect(thermy.currentTemperature()).toEqual(25);
    });

  });

});