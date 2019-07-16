import { InventoryChange } from './inventoryChange';
export declare class BatchChangeInventoryRequest {
    'idempotencyKey'?: string;
    'changes'?: Array<InventoryChange>;
    'ignoreUnchangedCounts'?: boolean;
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
