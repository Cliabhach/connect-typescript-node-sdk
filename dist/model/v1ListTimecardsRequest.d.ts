export declare class V1ListTimecardsRequest {
    'order'?: string;
    'employeeId'?: string;
    'beginClockinTime'?: string;
    'endClockinTime'?: string;
    'beginClockoutTime'?: string;
    'endClockoutTime'?: string;
    'beginUpdatedAt'?: string;
    'endUpdatedAt'?: string;
    'deleted'?: boolean;
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
