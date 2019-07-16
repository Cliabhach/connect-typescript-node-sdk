import { Order } from './order';
import { OrderEntry } from './orderEntry';
export declare class SearchOrdersResponse {
    'orderEntries'?: Array<OrderEntry>;
    'orders'?: Array<Order>;
    'cursor'?: string;
    'errors'?: Array<Error>;
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
