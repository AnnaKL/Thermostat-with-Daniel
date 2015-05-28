describe('Thermostat', function(){

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('Thermostat.html');
    // $.holdReady(false);
  });

  it('displays default temperature', function(){
    expect('#temp').toContainText('20');
  });

});
