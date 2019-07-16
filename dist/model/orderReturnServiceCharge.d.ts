import { Money } from './money';
import { OrderReturnTax } from './orderReturnTax';
export declare class OrderReturnServiceCharge {
    'uid'?: string;
    'sourceServiceChargeUid'?: string;
    'name'?: string;
    'catalogObjectId'?: string;
    'percentage'?: string;
    'amountMoney'?: Money;
    'appliedMoney'?: Money;
    'totalMoney'?: Money;
    'totalTaxMoney'?: Money;
    'calculationPhase'?: string;
    'taxable'?: boolean;
    'returnTaxes'?: Array<OrderReturnTax>;
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
