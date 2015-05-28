class Thermy
  attr_accessor :temperature
  attr_accessor :power_saving_mode
  def initialize
    @temperature ||= 20
    @power_saving_mode ||= true
  end
end
