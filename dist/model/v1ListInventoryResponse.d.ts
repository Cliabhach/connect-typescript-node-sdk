import { V1InventoryEntry } from './v1InventoryEntry';
export declare class V1ListInventoryResponse {
    'items'?: Array<V1InventoryEntry>;
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
