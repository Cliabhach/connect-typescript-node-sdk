export declare class ListAdditionalRecipientReceivableRefundsRequest {
    'beginTime'?: string;
    'endTime'?: string;
    'sortOrder'?: string;
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