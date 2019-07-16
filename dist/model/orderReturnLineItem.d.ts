import { Money } from './money';
import { OrderQuantityUnit } from './orderQuantityUnit';
import { OrderReturnDiscount } from './orderReturnDiscount';
import { OrderReturnLineItemModifier } from './orderReturnLineItemModifier';
import { OrderReturnTax } from './orderReturnTax';
export declare class OrderReturnLineItem {
    'uid'?: string;
    'sourceLineItemUid'?: string;
    'name'?: string;
    'quantity': string;
    'quantityUnit'?: OrderQuantityUnit;
    'note'?: string;
    'catalogObjectId'?: string;
    'variationName'?: string;
    'returnModifiers'?: Array<OrderReturnLineItemModifier>;
    'returnTaxes'?: Array<OrderReturnTax>;
    'returnDiscounts'?: Array<OrderReturnDiscount>;
    'basePriceMoney'?: Money;
    'variationTotalPriceMoney'?: Money;
    'grossReturnMoney'?: Money;
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
