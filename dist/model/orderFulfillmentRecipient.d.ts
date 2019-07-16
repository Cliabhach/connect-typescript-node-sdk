export declare class OrderFulfillmentRecipient {
    'customerId'?: string;
    'displayName'?: string;
    'emailAddress'?: string;
    'phoneNumber'?: string;
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
