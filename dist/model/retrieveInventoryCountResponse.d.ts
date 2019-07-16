import { InventoryCount } from './inventoryCount';
import { SquareError } from './squareError';
export declare class RetrieveInventoryCountResponse {
    'errors'?: Array<SquareError>;
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
