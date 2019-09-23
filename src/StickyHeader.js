import React from 'react'
// import StickyHeader from 'react-sticky-header'
// import 'react-sticky-header/styles/css'

class Header extends React.Component{
    render(){
        return(
           
            <div id="header">
              
                <img src="../public/finalProjectLogo.png" alt="your Logo"></img>
            
                <div id="profileNameAndImage">
                    
                    <img id="profileImage" src="#" alt="profile pic"></img>
                </div>
                
            </div>
            
        )
    }
}

export default Header