import { CatalogInfoResponseLimits } from './catalogInfoResponseLimits';
import { SquareError } from './squareError';
import { StandardUnitDescriptionGroup } from './standardUnitDescriptionGroup';
export declare class CatalogInfoResponse {
    'errors'?: Array<SquareError>;
    'limits'?: CatalogInfoResponseLimits;
    'standardUnitDescriptionGroup'?: StandardUnitDescriptionGroup;
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
