export declare class V1ListSettlementsRequest {
    'order'?: string;
    'beginTime'?: string;
    'endTime'?: string;
    'limit'?: number;
    'status'?: string;
    'batchToken'?: string;
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
