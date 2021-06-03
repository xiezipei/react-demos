import React, { useState } from 'react';

function AppByHooks2() {
    // 多状态声明
    const [ kv1 ] = useState('kv1')
    const [ kv2 ] = useState(18)
    const [ kv3 ] = useState('kv3')
    return (
        <div>
            <p>{ kv1 }</p>
            <p>{ kv2 }</p>
            <p>{ kv3 }</p>
        </div>
    )
}

export default AppByHooks2