describe('Thermostat UI', function(){

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('Thermostat.html');
    // $.holdReady(false);
  });

  it('displays default temperature', function(){
    expect('#temp').toContainText('20');
  });

  it('increases temperature when Up button clicked', function(){
    $('#up').click();
    expect('#temp').toContainText('21');
  });

  it('decreases temperature when Down button clicked', function(){
    $('#down').click();
    expect('#temp').toContainText('19');
  });

  it('reset temperature to 20 when reset button clicked', function(){
    $('#down').click();
    $('#reset').click();
    expect('#temp').toContainText('20');
  });

  it('Power Saving Mode is on when open the page', function(){
    expect('#power-saving').toContainText('true');
  });

  it('Power Saving Mode is off after turning off', function(){
    $('#powersaveoff').click();
    expect('#power-saving').toContainText('false');
  });

  it('Power Saving Mode is on after turning off and on', function(){
    $('#powersaveoff').click();
    $('#powersaveon').click();
    expect('#power-saving').toContainText('true');
  });

});
