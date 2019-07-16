import { WorkweekConfig } from './workweekConfig';
export declare class UpdateWorkweekConfigRequest {
    'workweekConfig'?: WorkweekConfig;
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
