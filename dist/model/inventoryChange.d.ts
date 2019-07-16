import { InventoryAdjustment } from './inventoryAdjustment';
import { InventoryPhysicalCount } from './inventoryPhysicalCount';
import { InventoryTransfer } from './inventoryTransfer';
export declare class InventoryChange {
    'type'?: string;
    'physicalCount'?: InventoryPhysicalCount;
    'adjustment'?: InventoryAdjustment;
    'transfer'?: InventoryTransfer;
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
