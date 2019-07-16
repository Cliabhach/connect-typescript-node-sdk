import { Money } from './money';
import { OrderLineItemDiscount } from './orderLineItemDiscount';
import { OrderLineItemModifier } from './orderLineItemModifier';
import { OrderLineItemTax } from './orderLineItemTax';
import { OrderQuantityUnit } from './orderQuantityUnit';
export declare class OrderLineItem {
    'uid'?: string;
    'name'?: string;
    'quantity': string;
    'quantityUnit'?: OrderQuantityUnit;
    'note'?: string;
    'catalogObjectId'?: string;
    'variationName'?: string;
    'modifiers'?: Array<OrderLineItemModifier>;
    'taxes'?: Array<OrderLineItemTax>;
    'discounts'?: Array<OrderLineItemDiscount>;
    'basePriceMoney'?: Money;
    'variationTotalPriceMoney'?: Money;
    'grossSalesMoney'?: Money;
    'totalTaxMoney'?: Money;
    'totalDiscountMoney'?: Money;
    'totalMoney'?: Money;
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
