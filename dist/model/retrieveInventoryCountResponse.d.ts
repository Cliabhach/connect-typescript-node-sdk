import { InventoryCount } from './inventoryCount';
export declare class RetrieveInventoryCountResponse {
    'errors'?: Array<Error>;
    'counts'?: Array<InventoryCount>;
    'cursor'?: string;
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
