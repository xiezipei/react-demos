import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'

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

/** 获取 */
export const getListAction = (data) => ({
    type: GET_LIST,
    data
})
