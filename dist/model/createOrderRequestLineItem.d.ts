import { CreateOrderRequestDiscount } from './createOrderRequestDiscount';
import { CreateOrderRequestModifier } from './createOrderRequestModifier';
import { CreateOrderRequestTax } from './createOrderRequestTax';
import { Money } from './money';
export declare class CreateOrderRequestLineItem {
    'name'?: string;
    'quantity': string;
    'basePriceMoney'?: Money;
    'variationName'?: string;
    'note'?: string;
    'catalogObjectId'?: string;
    'modifiers'?: Array<CreateOrderRequestModifier>;
    'taxes'?: Array<CreateOrderRequestTax>;
    'discounts'?: Array<CreateOrderRequestDiscount>;
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
