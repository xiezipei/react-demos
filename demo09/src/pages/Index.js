import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                { cid: 124, title: '123' },
                { cid: 456, title: '456' },
                { cid: 789, title: '789' },
            ]
        }
    }
    render() { 
        // return (
        //     <div>
        //         <h1>Index</h1>
        //         <ul>
        //             {
        //                 this.state.list.map((item, index) => {
        //                     return (
        //                         <li key={ index }>
        //                             <Link to={`/list/${item.cid}`}>
        //                                 { item.title }
        //                             </Link>
        //                         </li>
        //                     )
        //                 })
        //             }
        //         </ul>
        //     </div>
        // );

        // 标签重定向
        return (
            <Redirect to="/home/" />
        )
    }
}
 
export default Index;