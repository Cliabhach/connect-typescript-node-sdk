import { InventoryPhysicalCount } from './inventoryPhysicalCount';
import { SquareError } from './squareError';
export declare class RetrieveInventoryPhysicalCountResponse {
    'errors'?: Array<SquareError>;
    'count'?: InventoryPhysicalCount;
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
