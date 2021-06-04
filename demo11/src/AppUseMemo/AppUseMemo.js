import React, { useState } from 'react';
import ChildComponent from './ChildComponent'

function AppUseMemo() {
    const [A, setA] = useState('A')
    const [B, setB] = useState('B')
    return (
        <div>
            <button onClick={() => { setA(new Date().getTime() + ', A') }}>A</button>
            <button onClick={() => { setB(new Date().getTime() + ', B') }}>B</button>
            <ChildComponent name={B}>{A}</ChildComponent>
        </div>
    )
}

export default AppUseMemo