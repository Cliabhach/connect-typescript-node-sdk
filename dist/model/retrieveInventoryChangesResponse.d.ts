import { InventoryChange } from './inventoryChange';
export declare class RetrieveInventoryChangesResponse {
    'errors'?: Array<Error>;
    'changes'?: Array<InventoryChange>;
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
