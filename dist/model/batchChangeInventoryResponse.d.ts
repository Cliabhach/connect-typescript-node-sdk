import { InventoryCount } from './inventoryCount';
import { SquareError } from './squareError';
export declare class BatchChangeInventoryResponse {
    'errors'?: Array<SquareError>;
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
