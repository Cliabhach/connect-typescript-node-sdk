import { CatalogObject } from './catalogObject';
export declare class UpsertCatalogObjectRequest {
    'idempotencyKey': string;
    'object': CatalogObject;
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
