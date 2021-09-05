export const ITEM_UPVOTED = 'ITEM_UPVOTED'
export const ITEMS_FETCHED = 'ITEMS_FETCHED'


export const itemUpvoted = () => ({ type:ITEM_UPVOTED })

export const itemsFetched = (items) => {
    return {
        type:ITEMS_FETCHED,
        payload: items
    }
}