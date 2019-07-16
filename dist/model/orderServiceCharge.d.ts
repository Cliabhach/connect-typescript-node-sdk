import { Money } from './money';
import { OrderLineItemTax } from './orderLineItemTax';
export declare class OrderServiceCharge {
    'uid'?: string;
    'name'?: string;
    'catalogObjectId'?: string;
    'percentage'?: string;
    'amountMoney'?: Money;
    'appliedMoney'?: Money;
    'totalMoney'?: Money;
    'totalTaxMoney'?: Money;
    'calculationPhase'?: string;
    'taxable'?: boolean;
    'taxes'?: Array<OrderLineItemTax>;
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
