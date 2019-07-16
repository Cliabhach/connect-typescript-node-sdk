import { InventoryCount } from './inventoryCount';
export declare class BatchChangeInventoryResponse {
    'errors'?: Array<Error>;
    'counts'?: Array<InventoryCount>;
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
