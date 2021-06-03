import React, { Component } from 'react';
class List extends Component {
    constructor(props) {
        super(props)
        this.state = { }
    }
    render() { 
        return (
            <div>
                <h1>List</h1>
                <p>ID: { this.state.id }</p>
            </div>
        );
    }
    componentDidMount() {
        // this.props.match 对象有 3 部分：
        // - patch:自己定义的路由规则，可以清楚的看到是可以产地id参数的。
        // - url: 真实的访问路径，这上面可以清楚的看到传递过来的参数是什么。
        // - params：传递过来的参数，key和value值
        // console.log(this.props.match)

        let tempId = this.props.match.params.id
        this.setState({ id: tempId })
    }
}
 
export default List;