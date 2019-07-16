import { InventoryAdjustment } from './inventoryAdjustment';
import { SquareError } from './squareError';
export declare class RetrieveInventoryAdjustmentResponse {
    'errors'?: Array<SquareError>;
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
