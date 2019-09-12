import React from 'react'
import StickyFooter from 'react-sticky-footer'

class MyStickyFooter extends React.Component{
    render(){
        return(
             <StickyFooter id="footer"
                bottomThreshhold={50}
                normalStyles={{backgroundColor: "#999999", width: "100%", margin: "0 auto", padding: "1rem"}}
                stickyStyles={{display: "none"}}>
                    <div id="footer-links">
                        <ul>
                            <li>I'm the sticky footer</li>
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">Github</a></li> 
                        </ul>
                    </div>
                </StickyFooter>
        )
    }
}

export default MyStickyFooter