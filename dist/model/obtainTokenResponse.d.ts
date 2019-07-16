export declare class ObtainTokenResponse {
    'accessToken'?: string;
    'tokenType'?: string;
    'expiresAt'?: string;
    'merchantId'?: string;
    'subscriptionId'?: string;
    'planId'?: string;
    'idToken'?: string;
    'refreshToken'?: string;
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
