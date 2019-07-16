export declare class UpdateItemModifierListsRequest {
    'itemIds': Array<string>;
    'modifierListsToEnable'?: Array<string>;
    'modifierListsToDisable'?: Array<string>;
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
