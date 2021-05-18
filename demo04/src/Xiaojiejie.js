import React, { Component, Fragment } from 'react'
import './style.css'
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

    // 组件将要挂载
    componentWillMount(){
        console.log('componentWillMount----组件将要挂载到页面的时刻');   // 只在页面刷新时执行一次
    }

    // 组件挂载完成
    componentDidMount(){
        console.log('componentDidMount----组件挂载完成的时刻执行');  // 只在页面刷新时执行一次
    }

    shouldComponentUpdate(){
        console.log('1 - shouldComponentUpdate---组件发生改变前执行')
        return true
    }

    componentWillUpdate(){
        console.log('2 - componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
    }

    componentDidUpdate(){
        console.log('4 - componentDidUpdate----组件更新之后执行')
    }

    // 渲染模板
    render() {
        console.log('3 - render---组件挂载中.......');  // 只要有state和props变化就会执行
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