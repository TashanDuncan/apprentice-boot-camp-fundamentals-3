import { TaxCalculator } from '../tax-calculator';
import { Vehicle } from '../vehicle';

// const story1 = new Map([
//   [0, 0],

// ])

class DefaultTaxCalculator extends TaxCalculator {
  constructor() {
    super(2023);
  }

  calculateTax(vehicle: Vehicle) {
    if(vehicle.co2Emissions === 0) {
      return 0
    }
    if(vehicle.co2Emissions < 51) {
      return 10
    }

    if(vehicle.co2Emissions < 76) {
      return 25
    }

    if(vehicle.co2Emissions < 91) {
      return 105
    }

    if(vehicle.co2Emissions < 101) {
      return 125
    }

    if(vehicle.co2Emissions < 111) {
      return 145
    }

    if(vehicle.co2Emissions < 131) {
      return 165
    }

    if(vehicle.co2Emissions < 151) {
      return 205
    }

    if(vehicle.co2Emissions < 171) {
      return 515
    }

    if(vehicle.co2Emissions < 191) {
      return 830
    }

    if(vehicle.co2Emissions < 226) {
      return 1240
    }


    if(vehicle.co2Emissions <= 255) {
      return 1760
    }
    else {
      return 2070
    }
  }
}

export { DefaultTaxCalculator }