import { InventoryPhysicalCount } from './inventoryPhysicalCount';
export declare class RetrieveInventoryPhysicalCountResponse {
    'errors'?: Array<Error>;
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
