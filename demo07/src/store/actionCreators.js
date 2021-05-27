import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'

/** 值改变 */
export const changeInputAction = value => ({
    type: CHANGE_INPUT,
    value
})

/** 新增 */
export const addItemAction = () => ({
    type: ADD_ITEM
})

/** 删除 */
export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})