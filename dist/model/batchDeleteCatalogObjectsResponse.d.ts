import { SquareError } from './squareError';
export declare class BatchDeleteCatalogObjectsResponse {
    'errors'?: Array<SquareError>;
    'deletedObjectIds'?: Array<string>;
    'deletedAt'?: string;
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
