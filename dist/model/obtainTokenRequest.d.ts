export declare class ObtainTokenRequest {
    'clientId': string;
    'clientSecret': string;
    'code'?: string;
    'redirectUri'?: string;
    'grantType': string;
    'refreshToken'?: string;
    'migrationToken'?: string;
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
