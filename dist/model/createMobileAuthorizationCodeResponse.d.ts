export declare class CreateMobileAuthorizationCodeResponse {
    'authorizationCode'?: string;
    'expiresAt'?: string;
    'error'?: Error;
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
