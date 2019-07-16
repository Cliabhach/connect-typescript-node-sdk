export declare class UpdateItemTaxesRequest {
    'itemIds': Array<string>;
    'taxesToEnable'?: Array<string>;
    'taxesToDisable'?: Array<string>;
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
