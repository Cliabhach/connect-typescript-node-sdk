import { MeasurementUnit } from './measurementUnit';
export declare class OrderQuantityUnit {
    'measurementUnit'?: MeasurementUnit;
    'precision'?: number;
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
