import { StandardUnitDescription } from './standardUnitDescription';
export declare class StandardUnitDescriptionGroup {
    'standardUnitDescriptions'?: Array<StandardUnitDescription>;
    'languageCode'?: string;
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
