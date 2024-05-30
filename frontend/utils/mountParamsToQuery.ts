import { ReadonlyURLSearchParams } from "next/navigation";

export const paramsToQuery = (params : ReadonlyURLSearchParams) => {
    const currentPage = Number(params.get('page')) || 0;
    const currentOrder = params.get('sort');
    const currentField = params.get('field');
    const currentCategory = params.get('category');
    const currentTerm = params.get('term');

    const filter: Record<string,string> = {};   

    if(currentCategory){
        filter["category"] = currentCategory;
    }

    if(currentTerm){
        filter["q"] = currentTerm;
    }

    return {
        page: currentPage,
        ...(currentOrder && {sortOrder: currentOrder}),
        ...(currentField && {sortField: currentField}),
        ...((filter?.category || filter?.q) && {filter}),        
    }
}

type PropsToQueryParams = {
    sort?: string,
    field?: string,
    category?: string;
    page: number
    term?: string;
};
  
export const propsToQuery = ({
    sort,
    field,
    page,
    category,
    term
}:PropsToQueryParams) => {
    const filter: Record<string,string> = {};   
    if(category){
        filter["category"] = category;
    }
    if(term){
        filter["q"] = term;
    }    
    return {
        page,
        ...((filter?.category || filter?.q) && {filter}),
        ...(sort && {sortOrder: sort}),
        ...(field && {sortField: field}),
    }
}