import { useMemo } from 'react';

function ChildComponent({ name, children }) {
    function changeName(name) {
        console.log('changeName =>', name)
        return name
    }

    const actionName = useMemo(() => {
        return changeName(name)
    }, [name])  // 使用 `useMemo` 优化性能问题

    return (
        <div>
            <div>{ actionName }</div>
            <div>{ children }</div>
        </div>
    )
}

export default ChildComponent