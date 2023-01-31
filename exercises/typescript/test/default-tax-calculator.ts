import { TaxCalculator } from "../tax-calculator";
import { FuelType } from "../fuel-type";
import { Vehicle } from "../vehicle";

class DefaultTaxCalculator extends TaxCalculator {
  story4Toggle: boolean
  story5Toggle: boolean
  constructor(story4Toggle: boolean = false, story5Toggle: boolean = false) {
    super(2023);
    this.story4Toggle = story4Toggle
    this.story5Toggle = story5Toggle
  }

  calculateTax(vehicle: Vehicle) {
    if (vehicle.dateOfFirstRegistration.getFullYear() < this.year) {
      if (this.story5Toggle && vehicle.listPrice > 40_000) {
        if (vehicle.fuelType === FuelType.PETROL || vehicle.fuelType === FuelType.DIESEL) {
          return 450
        }
      }
    }
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
    } else if (vehicle.fuelType === FuelType.ALTERNATIVE_FUEL) {
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
    } else if (vehicle.fuelType === "Diesel") {
      if (vehicle.co2Emissions === 0) return 0;
      if (vehicle.co2Emissions < 51) return 25;
      if (vehicle.co2Emissions < 76) return 105;
      if (vehicle.co2Emissions < 91) return 125;
      if (vehicle.co2Emissions < 101) return 145;
      if (vehicle.co2Emissions < 111) return 165;
      if (vehicle.co2Emissions < 131) return 205;
      if (vehicle.co2Emissions < 151) return 515;
      if (vehicle.co2Emissions < 171) return 830;
      if (vehicle.co2Emissions < 191) return 1240;
      if (vehicle.co2Emissions < 226) return 1760;
      if (vehicle.co2Emissions <= 255 || vehicle.co2Emissions > 255)
        return 2070;
    } else {
      return 0
    }
  }
}
export { DefaultTaxCalculator };
