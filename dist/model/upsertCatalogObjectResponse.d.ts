import { CatalogIdMapping } from './catalogIdMapping';
import { CatalogObject } from './catalogObject';
export declare class UpsertCatalogObjectResponse {
    'errors'?: Array<Error>;
    'catalogObject'?: CatalogObject;
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
