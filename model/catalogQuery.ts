/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * The version of the OpenAPI document: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CatalogQueryExact } from './catalogQueryExact';
import { CatalogQueryItemsForModifierList } from './catalogQueryItemsForModifierList';
import { CatalogQueryItemsForTax } from './catalogQueryItemsForTax';
import { CatalogQueryPrefix } from './catalogQueryPrefix';
import { CatalogQueryRange } from './catalogQueryRange';
import { CatalogQuerySortedAttribute } from './catalogQuerySortedAttribute';
import { CatalogQueryText } from './catalogQueryText';

/**
* A query to be applied to a [SearchCatalogObjectsRequest](#type-searchcatalogobjectsrequest). Only one query field may be present.  Where an attribute name is required, it should be specified as the name of any field marked \"searchable\" from the structured data types for the desired result object type(s) ([CatalogItem](#type-catalogitem), [CatalogItemVariation](#type-catalogitemvariation), [CatalogCategory](#type-catalogcategory), [CatalogTax](#type-catalogtax), [CatalogDiscount](#type-catalogdiscount), [CatalogModifierList](#type-catalogmodifierlist), [CatalogModifier](#type-catalogmodifier)).  For example, a query that should return Items may specify attribute names from any of the searchable fields of the [CatalogItem](#type-catalogitem) data type, namely `\"name\"`, `\"description\"`, and `\"abbreviation\"`.
*/
export class CatalogQuery {
    'sortedAttributeQuery'?: CatalogQuerySortedAttribute;
    'exactQuery'?: CatalogQueryExact;
    'prefixQuery'?: CatalogQueryPrefix;
    'rangeQuery'?: CatalogQueryRange;
    'textQuery'?: CatalogQueryText;
    'itemsForTaxQuery'?: CatalogQueryItemsForTax;
    'itemsForModifierListQuery'?: CatalogQueryItemsForModifierList;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sortedAttributeQuery",
            "baseName": "sorted_attribute_query",
            "type": "CatalogQuerySortedAttribute"
        },
        {
            "name": "exactQuery",
            "baseName": "exact_query",
            "type": "CatalogQueryExact"
        },
        {
            "name": "prefixQuery",
            "baseName": "prefix_query",
            "type": "CatalogQueryPrefix"
        },
        {
            "name": "rangeQuery",
            "baseName": "range_query",
            "type": "CatalogQueryRange"
        },
        {
            "name": "textQuery",
            "baseName": "text_query",
            "type": "CatalogQueryText"
        },
        {
            "name": "itemsForTaxQuery",
            "baseName": "items_for_tax_query",
            "type": "CatalogQueryItemsForTax"
        },
        {
            "name": "itemsForModifierListQuery",
            "baseName": "items_for_modifier_list_query",
            "type": "CatalogQueryItemsForModifierList"
        }    ];

    static getAttributeTypeMap() {
        return CatalogQuery.attributeTypeMap;
    }
}

