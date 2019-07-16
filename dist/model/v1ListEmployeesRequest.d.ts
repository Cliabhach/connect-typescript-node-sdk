export declare class V1ListEmployeesRequest {
    'order'?: string;
    'beginUpdatedAt'?: string;
    'endUpdatedAt'?: string;
    'beginCreatedAt'?: string;
    'endCreatedAt'?: string;
    'status'?: string;
    'externalId'?: string;
    'limit'?: number;
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
