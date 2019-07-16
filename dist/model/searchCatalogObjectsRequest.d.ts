import { CatalogQuery } from './catalogQuery';
export declare class SearchCatalogObjectsRequest {
    'cursor'?: string;
    'objectTypes'?: Array<string>;
    'includeDeletedObjects'?: boolean;
    'includeRelatedObjects'?: boolean;
    'beginTime'?: string;
    'query'?: CatalogQuery;
    'limit'?: number;
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
