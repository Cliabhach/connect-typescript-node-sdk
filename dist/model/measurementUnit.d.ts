import { MeasurementUnitCustom } from './measurementUnitCustom';
export declare class MeasurementUnit {
    'customUnit'?: MeasurementUnitCustom;
    'areaUnit'?: string;
    'lengthUnit'?: string;
    'volumeUnit'?: string;
    'weightUnit'?: string;
    'genericUnit'?: string;
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
