import React, { Component, Fragment } from 'react'
import Boss from './Boss'
import './css/xiaojiejie.css'
import XiaojiejieItem from './XiaojiejieItem'

class Xiaojiejie extends Component {
    // JS的构造函数，由其他函数执行
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '', // input中的值
            list: ['头部按摩', '精油推背']    // 服务列表
        }
    }

    // 渲染模板
    render() {
        return (
            <Fragment>
                <label htmlFor="jspang">加入服务：</label>
                <div>
                    <input className="border-yellow" placeholder="请输入" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul ref={(ul)=>{this.ul = ul}}>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <XiaojiejieItem 
                                    key={index + item}
                                    content={item}
                                    index={index}
                                    deleteItem={this.deleteItem.bind(this)}
                                />
                            )
                        })
                    }
                </ul>
                <Boss></Boss>
            </Fragment>
        )
    }

    // 输入框值改变事件
    inputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    };

    // 增加列表
    addList() {
        if (this.state.inputValue === '') {
            return;
        }
        this.setState({ 
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        });
    }

    // 删除选项
    deleteItem(index) {
        // 记住React是禁止直接操作state的,虽然`this.state.list.splice(index,1)`也管用,
        // 但是在后期的性能优化上会有很多麻烦,所以一定不要这样操作
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
}

export default Xiaojiejie;