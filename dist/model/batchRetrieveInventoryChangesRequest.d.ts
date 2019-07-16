export declare class BatchRetrieveInventoryChangesRequest {
    'catalogObjectIds'?: Array<string>;
    'locationIds'?: Array<string>;
    'types'?: Array<string>;
    'states'?: Array<string>;
    'updatedAfter'?: string;
    'updatedBefore'?: string;
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
