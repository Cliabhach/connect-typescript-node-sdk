import { InventoryAdjustment } from './inventoryAdjustment';
export declare class RetrieveInventoryAdjustmentResponse {
    'errors'?: Array<Error>;
    'adjustment'?: InventoryAdjustment;
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
