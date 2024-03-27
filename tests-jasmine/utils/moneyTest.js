import {formatCurrency} from '../../scripts/utils/money.js'

describe('test suite: format currency',()=>{

    it('converts cents to dollars',()=>{

        expect(formatCurrency(2095)).toEqual('20.95')

    });

    it('works with 0', () => {
      expect(formatCurrency(0)).toBe("0.00");
    })

    it('rounds-up', () => {
      expect(formatCurrency(2000.5)).toBe("20.01")
    });

    it('rounds-down', () => {
        expect(formatCurrency(2000.4)).toBe("20.00")
        }); 

})