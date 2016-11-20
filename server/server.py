from flask import Flask, jsonify
from flask_cors import CORS, cross_origin


class HouseMonitoringServer(object):
    def __init__(self):
        super(HouseMonitoringServer, self).__init__()
        self.electricity_base = 20
        self.hot_water_base = 2
        self.cold_water_base = 1
        self.temperature_base = 28
        self.gas_base = 3
        self.app = Flask(__name__)




if __name__ == "__main__":

    app = Flask(__name__)
    serverConfigs = HouseMonitoringServer()
    CORS(app)

    @app.route('/sensors/electricity')
    def sensor_electricity():
        response = {'electricity': serverConfigs.electricity_base}
        response = jsonify(response)
        response.status_code = 200
        return response

    @app.route('/sensors/water')
    def sensor_water():
        response = {
            'hot_water': serverConfigs.hot_water_base,
            'cold_water': serverConfigs.cold_water_base
        }
        response = jsonify(response)
        response.status_code = 200
        return response

    @app.route('/sensors/temparature')
    def sensor_temperature():
        response = {'electricity': serverConfigs.temperature_base}
        response = jsonify(response)
        response.status_code = 200
        return response

    @app.route('/sensors/gas')
    def sensor_gas():
        response = {'gas': serverConfigs.gas_base}
        response = jsonify(response)
        response.status_code = 200
        return response


    app.run(threaded=True, port=8080)
