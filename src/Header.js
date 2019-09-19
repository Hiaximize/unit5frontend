import React from 'react'
// import StickyHeader from 'react-sticky-header'
// import 'react-sticky-header/styles/css'

class Header extends React.Component{
    
    handleView(view){
        this.props.handleView(view)
    }
    handleChange(){
        this.props.handleChange()
    }

    render(){
        return(
           
            <div id="header">
                <div id="leftSide">
                    <img src="#" alt="your Logo"></img>
                </div>

                <div id="headerLinksContainer">

                    <ul id="headerLinks">
                        <li onClick={()=>{
                            this.props.handleView('home')
                        }}>HOME</li>

                         <li onClick={()=>{
                            this.props.handleView('calendar')
                        }}>CALENDAR</li>

                        <li onClick={()=>{
                            this.props.handleView('addMember')
                        }}>ADD MEMBER</li>
                    </ul>

                </div>   

                <div id="profileNameAndImage">                    
                    <img id="profileImage" src="#" alt="profile pic"></img>
                </div>
                
            </div>
            
        )
    }
}

export default Header