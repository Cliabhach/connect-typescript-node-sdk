import { Card } from './card';
export declare class TenderCardDetails {
    'status'?: string;
    'card'?: Card;
    'entryMethod'?: string;
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
