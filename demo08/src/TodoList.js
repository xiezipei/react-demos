import React from 'react';
import { connect } from 'react-redux'

const TodoList = (props) => {
    let { inputValue, inputChange, clickButton, list } = props;
    return (
        <div>
            <div>
                <input value={ inputValue } onChange={ inputChange } />
                <button onClick={ clickButton }>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (<li key={ index }>{ item }</li>)
                    })
                }
            </ul>
        </div>
    );
}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action)
        },
        clickButton() {
            let action = {
                type: 'add_item'
            }
            dispatch(action)
        }
    }
}

// connect的作用是把ui组件（无状态组件）和业务逻辑代码分开，
// 然后通过connect再连接在一起，让代码更加清晰和易于维护
export default connect(stateToProps, dispatchToProps)(TodoList);