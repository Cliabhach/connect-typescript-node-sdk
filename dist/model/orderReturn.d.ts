import { OrderMoneyAmounts } from './orderMoneyAmounts';
import { OrderReturnDiscount } from './orderReturnDiscount';
import { OrderReturnLineItem } from './orderReturnLineItem';
import { OrderReturnServiceCharge } from './orderReturnServiceCharge';
import { OrderReturnTax } from './orderReturnTax';
import { OrderRoundingAdjustment } from './orderRoundingAdjustment';
export declare class OrderReturn {
    'uid'?: string;
    'sourceOrderId'?: string;
    'returnLineItems'?: Array<OrderReturnLineItem>;
    'returnServiceCharges'?: Array<OrderReturnServiceCharge>;
    'returnTaxes'?: Array<OrderReturnTax>;
    'returnDiscounts'?: Array<OrderReturnDiscount>;
    'roundingAdjustment'?: OrderRoundingAdjustment;
    'returnAmounts'?: OrderMoneyAmounts;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
