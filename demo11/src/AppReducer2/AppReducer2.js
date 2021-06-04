import React from 'react';
import ShowArea from './ShowArea'
import Buttons from './Buttons'
import { Color } from './Color'

function AppReducer2() {
    return (
        <div>
            {/* Color组件包裹两个子组件 */}
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
        </div>
    )
}

export default AppReducer2