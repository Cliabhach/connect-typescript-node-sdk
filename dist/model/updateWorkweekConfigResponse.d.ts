import { SquareError } from './squareError';
import { WorkweekConfig } from './workweekConfig';
export declare class UpdateWorkweekConfigResponse {
    'workweekConfig'?: WorkweekConfig;
    'errors'?: Array<SquareError>;
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
