import React from 'react'
import StickyFooter from 'react-sticky-footer'

class MyStickyFooter extends React.Component{
    render(){
        return(
            
            <StickyFooter className="stickyFooter"
            bottomThreshold={50}
            normalStyles={{borderLeft: "25px solid transparent", backgroundColor: "#575757", padding: "15px", zIndex: "2"}}
            stickyStyles={{display: "none"}}>
                <div id="footerContainer">
                    <ul id="footer">
                        <li><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/dbarkerit">LinkedIn</a></li>

                        <li><a rel="noopener noreferrer" target="_blank" href="https://www.github.com/hiaximize">Github</a></li>

                        <li><a rel="noopener noreferrer" target="_blank" href="http://derekbarker.herokuapp.com/">My Portfolio</a></li>
                    </ul>
                    </div>
                
            </StickyFooter>
        )
    }
}

export default MyStickyFooter