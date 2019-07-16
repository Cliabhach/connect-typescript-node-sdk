export declare class BatchRetrieveInventoryCountsRequest {
    'catalogObjectIds'?: Array<string>;
    'locationIds'?: Array<string>;
    'updatedAfter'?: string;
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