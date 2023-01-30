import { TaxCalculator } from '../tax-calculator';
import { Vehicle } from '../vehicle';



class DefaultTaxCalculator extends TaxCalculator {
  constructor() {
    super(2023);
  }

  calculateTax(vehicle: Vehicle) {
    return -1;
  }
}

export { DefaultTaxCalculator }