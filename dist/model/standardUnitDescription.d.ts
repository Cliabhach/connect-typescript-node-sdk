import { MeasurementUnit } from './measurementUnit';
export declare class StandardUnitDescription {
    'unit'?: MeasurementUnit;
    'name'?: string;
    'abbreviation'?: string;
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
