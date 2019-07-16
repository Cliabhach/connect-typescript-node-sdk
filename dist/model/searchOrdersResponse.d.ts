import { Order } from './order';
import { OrderEntry } from './orderEntry';
import { SquareError } from './squareError';
export declare class SearchOrdersResponse {
    'orderEntries'?: Array<OrderEntry>;
    'orders'?: Array<Order>;
    'cursor'?: string;
    'errors'?: Array<SquareError>;
    'unconvertibleTransactionIds'?: Array<string>;
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
