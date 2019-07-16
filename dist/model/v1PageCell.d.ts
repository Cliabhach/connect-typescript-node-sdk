export declare class V1PageCell {
    'pageId'?: string;
    'row'?: number;
    'column'?: number;
    'objectType'?: string;
    'objectId'?: string;
    'placeholderType'?: string;
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
