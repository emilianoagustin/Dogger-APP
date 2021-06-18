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
    }
    return pageNumbers;
}
