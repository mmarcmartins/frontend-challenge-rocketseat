import { ReadonlyURLSearchParams } from "next/navigation";

export const paramsToQuery = (params : ReadonlyURLSearchParams) => {
    const currentPage = Number(params.get('page')) || 0;
    const currentOrder = params.get('sort');
    const currentField = params.get('field');
    const currentCategory = params.get('category');

    return {
        page: currentPage,
        ...(currentOrder && {sortOrder: currentOrder}),
        ...(currentField && {sortField: currentField}),
        ...(currentCategory && {filter: { category: currentCategory}}),        
    }
}

type PropsToQueryParams = {
    sort?: string,
    field?: string,
    category?: string;
    page: number
};

export const propsToQuery = ({
    sort,
    field,
    page,
    category
}:PropsToQueryParams) => {
    return {
        page,
        ...(category && {filter: {category}}),
        ...(sort && {sortOrder: sort}),
        ...(field && {sortField: field}),
    }
}