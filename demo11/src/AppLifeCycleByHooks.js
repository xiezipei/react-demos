import React, { useEffect, useState } from 'react';

function LifeCycleByHooks() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`useEffect => 你点击了${count}次。`)
    })

    return (
        <div>
            <p>你点击了{ count }次。</p>
            <button onClick={ () => setCount(count + 1)}>点击我</button>
        </div>
    )
}

export default LifeCycleByHooks