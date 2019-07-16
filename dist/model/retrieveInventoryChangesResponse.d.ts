import { InventoryChange } from './inventoryChange';
import { SquareError } from './squareError';
export declare class RetrieveInventoryChangesResponse {
    'errors'?: Array<SquareError>;
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
