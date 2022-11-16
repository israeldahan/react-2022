
// function MainContent() {

//     return(
//         <div className="main-content">
//             <div className="sidebar">
//             <p>This is Sidebar</p>
//             </div>
//             <div className="article">
//                 <p>This is Main Content</p>
//             </div>
//         </div>
//     )
// }

// export default MainContent;

import React from "react";

class MainContent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
  
    componentDidMount(){
        this.TIMER = setInterval(
            () => {this.tick()}, 1000
        )
    }
    componentWillUnmount(){
        clearInterval(this.TIMER);
    }

    tick(){
        this.setState({
            date:  new Date()
        })
    }
    render(){
        return(
        <div className="main-content">
            <div className="sidebar">
            <p>This is Sidebar</p>
            </div>
            <div className="article">
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        </div>
        )
    }
}

export default MainContent;