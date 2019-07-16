import { Card } from './card';
import { SquareError } from './squareError';
export declare class CreateCustomerCardResponse {
    'errors'?: Array<SquareError>;
    'card'?: Card;
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
