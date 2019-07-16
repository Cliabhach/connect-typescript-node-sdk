export declare class RenewTokenResponse {
    'accessToken'?: string;
    'tokenType'?: string;
    'expiresAt'?: string;
    'merchantId'?: string;
    'subscriptionId'?: string;
    'planId'?: string;
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
