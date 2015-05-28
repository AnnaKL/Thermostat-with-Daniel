require 'sinatra/base'
require 'json'

require_relative 'models/thermy'

module Thermostat
  class Application < Sinatra::Application

    set :public_folder, proc { File.join('public') }

    get '/' do
      'YOU NEED TO QUERY THIS FOR JSON'
    end

    get '/temp.json' do
      @@thermy||=Thermy.new
      headers 'Access-Control-Allow-Origin' => '*'
      { temp: @@thermy.temperature.to_s}.to_json
    end

    get '/powerSavingMode.json' do
      @@thermy||=Thermy.new
      headers 'Access-Control-Allow-Origin' => '*'
      { powerSavingMode: @@thermy.power_saving_mode.to_s}.to_json
    end

    post '/temp' do
      @@thermy||=Thermy.new
      headers 'Access-Control-Allow-Origin' => '*'
      @@thermy.temperature=params[:temp]
    end

    post '/powerSavingMode' do
      @@thermy||=Thermy.new
      headers 'Access-Control-Allow-Origin' => '*'
      @@thermy.power_saving_mode=params[:powersavingmode]
    end
  end
end
