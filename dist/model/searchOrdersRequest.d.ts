import { SearchOrdersQuery } from './searchOrdersQuery';
export declare class SearchOrdersRequest {
    'locationIds'?: Array<string>;
    'cursor'?: string;
    'query'?: SearchOrdersQuery;
    'limit'?: number;
    'returnEntries'?: boolean;
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
