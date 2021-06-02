import { GET_MY_LIST, CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'
import axios from 'axios'

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

/** 获取列表 */
export const getTodoList = () =>{
    return (dispatch)=>{
        axios.get('https://easy-mock.bookset.io/mock/60a3753447ef9e51d0ad2a87/react-demo/list/get').then((res)=>{
            const data = res.data.data.list
            const action = getListAction(data)
            dispatch(action)
        })
    }
}

export const getMyListAction = () => ({
    type: GET_MY_LIST
})