import React from 'react'
import Member from './Member.js'

class InfoContainer extends React.Component{
    
    render(){
        
        return(
            <div id="infoContainer">
        
                <Member members={this.props.members}/>
                             
            </div>
        )
    }
}

export default InfoContainer