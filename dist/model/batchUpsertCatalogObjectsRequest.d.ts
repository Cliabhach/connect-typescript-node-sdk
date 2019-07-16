import { CatalogObjectBatch } from './catalogObjectBatch';
export declare class BatchUpsertCatalogObjectsRequest {
    'idempotencyKey': string;
    'batches'?: Array<CatalogObjectBatch>;
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
