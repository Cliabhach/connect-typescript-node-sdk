import { SearchOrdersCustomerFilter } from './searchOrdersCustomerFilter';
import { SearchOrdersDateTimeFilter } from './searchOrdersDateTimeFilter';
import { SearchOrdersFulfillmentFilter } from './searchOrdersFulfillmentFilter';
import { SearchOrdersSourceFilter } from './searchOrdersSourceFilter';
import { SearchOrdersStateFilter } from './searchOrdersStateFilter';
export declare class SearchOrdersFilter {
    'stateFilter'?: SearchOrdersStateFilter;
    'dateTimeFilter'?: SearchOrdersDateTimeFilter;
    'fulfillmentFilter'?: SearchOrdersFulfillmentFilter;
    'sourceFilter'?: SearchOrdersSourceFilter;
    'customerFilter'?: SearchOrdersCustomerFilter;
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
