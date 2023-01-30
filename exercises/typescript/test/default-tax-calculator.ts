import { TaxCalculator } from "../tax-calculator";
import { FuelType } from "../fuel-type";
import { Vehicle } from "../vehicle";

// const story1 = new Map([
//   [0, 0],

// ])

class DefaultTaxCalculator extends TaxCalculator {
  constructor() {
    super(2023);
  }

  calculateTax(vehicle: Vehicle) {
    if (vehicle.fuelType === "Petrol") {
      if (vehicle.co2Emissions === 0) {
        return 0;
      }
      if (vehicle.co2Emissions < 51) {
        return 10;
      }

      if (vehicle.co2Emissions < 76) {
        return 25;
      }

      if (vehicle.co2Emissions < 91) {
        return 105;
      }

      if (vehicle.co2Emissions < 101) {
        return 125;
      }

      if (vehicle.co2Emissions < 111) {
        return 145;
      }

      if (vehicle.co2Emissions < 131) {
        return 165;
      }

      if (vehicle.co2Emissions < 151) {
        return 205;
      }

      if (vehicle.co2Emissions < 171) {
        return 515;
      }

      if (vehicle.co2Emissions < 191) {
        return 830;
      }

      if (vehicle.co2Emissions < 226) {
        return 1240;
      }

      if (vehicle.co2Emissions <= 255) {
        return 1760;
      }
      if (vehicle.co2Emissions > 255) {
        return 2070;
      }
    }
    else if (vehicle.fuelType === FuelType.ALTERNATIVE_FUEL) {
      if (vehicle.co2Emissions === 0) {
        return 0;
      }
      if (vehicle.co2Emissions < 51) {
        return 0;
      }

      if (vehicle.co2Emissions < 76) {
        return 15;
      }

      if (vehicle.co2Emissions < 91) {
        return 95;
      }

      if (vehicle.co2Emissions < 101) {
        return 115;
      }

      if (vehicle.co2Emissions < 111) {
        return 135;
      }

      if (vehicle.co2Emissions < 131) {
        return 155;
      }

      if (vehicle.co2Emissions < 151) {
        return 195;
      }

      if (vehicle.co2Emissions < 171) {
        return 505;
      }

      if (vehicle.co2Emissions < 191) {
        return 820;
      }

      if (vehicle.co2Emissions < 226) {
        return 1230;
      }

      if (vehicle.co2Emissions <= 255) {
        return 1750;
      }
      if (vehicle.co2Emissions > 255) {
        return 2060;
      }
    }
    else { // Hey Tay 👋
      return 0;
    }
  }
}

export { DefaultTaxCalculator };
