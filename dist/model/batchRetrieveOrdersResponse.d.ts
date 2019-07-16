import { Order } from './order';
import { SquareError } from './squareError';
export declare class BatchRetrieveOrdersResponse {
    'orders'?: Array<Order>;
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
