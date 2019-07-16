import { Card } from './card';
export declare class CreateCustomerCardResponse {
    'errors'?: Array<Error>;
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
