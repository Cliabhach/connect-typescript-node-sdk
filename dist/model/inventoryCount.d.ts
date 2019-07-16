export declare class InventoryCount {
    'catalogObjectId'?: string;
    'catalogObjectType'?: string;
    'state'?: string;
    'locationId'?: string;
    'quantity'?: string;
    'calculatedAt'?: string;
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
