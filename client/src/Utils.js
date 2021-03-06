export const paginate = (items, currentPage, itemsPerPage) => {
    let indexLastItem = currentPage * itemsPerPage;
    let indexFirstItem = indexLastItem - itemsPerPage;
    let currentItems = items.slice(indexFirstItem, indexLastItem);
    return currentItems;
}

export const paginateNumbers = (itemsPerPage, totalItems) => {
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++){
        pageNumbers.push(i)
    };
    return pageNumbers;
}

export const prevPage = (currentPageNumber) => {
    if(currentPageNumber < 2) return 1;
    if(currentPageNumber > 1) return currentPageNumber - 1;
}

export const nextPage = (currentPageNumber, totalItems, itemsPerPage) => {
    let lastPage = Math.ceil(totalItems / itemsPerPage);
    if(currentPageNumber === lastPage) return lastPage;
    else return currentPageNumber + 1;
}

export const selected = (array) => {
    let aux  = [];
    for (let i=0; i<array.length;i++) {
        if(array[i].selected)
        aux.push(array[i].value);
    };
    return aux;
};

export const validate = (input) => {
    let errors = {};
    
    if (!input.name) {
        errors.name = 'name is required';
    }

    if (!input.minHeight){
        errors.minHeight = 'minimum height is required';
    }
    if (!input.maxHeight){
        errors.maxHeight = 'maximum height is required';
    }
    
    if (!input.minWeight){
        errors.minWeight = 'minimum weight is required';
    }
    if (!input.maxWeight){
        errors.maxWeight = 'maximum weight is required';
    }

    return errors;
}