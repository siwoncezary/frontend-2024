import React, { Component } from "react";
import { useState } from "react";

export default function Switch() {
    const [color, setColor] = useState({ color: 'success', index: 0 })

    return (
        <div
            className={" w-25 text-center ratio ratio-1x1 rounded-circle bg-" + color.color}
            onClick={(e) => {
                const newColor = color.color === 'danger' ? 'success' : 'danger';
                setColor({ color: newColor, index: color.index + 1 });
                console.dir(newColor);
            }
            }
        >
            <div className="row align-items-center text-center">
                < div className="text-center">{"counter: " + color.index}</div>
            </div>
        </div>
    )
}

// export default class Switch extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {color: 'success'}
//     }

//     changeColor = () => {
//         if (this.state.color === "success") {
//             this.setState({ color: "danger"})
//         } else {
//             this.setState({ color: "success"});
//         }
//     }

//     render() {
//         return (
//             <div
//                 className={"border w-25 ratio ratio-1x1 rounded-circle bg-" + this.state.color}
//                 onClick={ this.changeColor}
//             >
//             </div>
//         )
//     }
//}