import { CreateOrderRequestDiscount } from './createOrderRequestDiscount';
import { CreateOrderRequestLineItem } from './createOrderRequestLineItem';
import { CreateOrderRequestTax } from './createOrderRequestTax';
import { Order } from './order';
export declare class CreateOrderRequest {
    'order'?: Order;
    'idempotencyKey'?: string;
    'referenceId'?: string;
    'lineItems'?: Array<CreateOrderRequestLineItem>;
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
