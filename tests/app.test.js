const assert = require('assert');

const app = require('../app.js')

describe('Vehicle Rating Calculator', function () {
    it('calculates a rating of 10 for a vehicle with 4 cylinders and diesel fuel', function () {
        const smallCar = app.smallCar;
        const rating = app.calculatorVehicleRating(smallCar);
        assert.equal(rating, 10);

    });
    it('calculates a rating of 12 for a vehicle with 8 cylinders and regular fuel', function () {
        const smallTruck = app.smallTruck;
        const rating = app.calculatorVehicleRating(smallTruck);
        assert.equal(rating, 12);
    });



}); 