import { CatalogIdMapping } from './catalogIdMapping';
import { CatalogObject } from './catalogObject';
export declare class BatchUpsertCatalogObjectsResponse {
    'errors'?: Array<Error>;
    'objects'?: Array<CatalogObject>;
    'updatedAt'?: string;
    'idMappings'?: Array<CatalogIdMapping>;
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
