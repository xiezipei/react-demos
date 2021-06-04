function ChildComponent({ name, children }) {
    function changeName(name) {
        console.log('changeName =>', name)
        return name
    }
    const actionName = changeName(name)
    return (
        <div>
            <div>{ actionName }</div>
            <div>{ children }</div>
        </div>
    )
}

export default ChildComponent