import { Order } from './order';
import { SquareError } from './squareError';
export declare class CreateOrderResponse {
    'order'?: Order;
    'errors'?: Array<SquareError>;
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
