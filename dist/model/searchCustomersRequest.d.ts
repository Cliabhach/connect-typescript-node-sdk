import { CustomerQuery } from './customerQuery';
export declare class SearchCustomersRequest {
    'cursor'?: string;
    'limit'?: number;
    'query'?: CustomerQuery;
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
