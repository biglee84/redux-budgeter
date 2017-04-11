export const budgetReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                Object.assign({}, action.item)
            ];
        case 'FETCH_ITEM_SUCCESS':
            return action.items;
        default:
            return state;
    }
};
