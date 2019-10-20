import React from 'react'
import Member from './Member.js'

class InfoContainer extends React.Component{
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    updateMember(){
        this.props.updateMember()
    }
    
    handleChange(){
        this.props.handleChange()
    }

    handleDelete(event, _id) {
        event.preventDefault()
        fetch(`http://localhost:3000/members/${_id}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                }
            }).then(data => {
                console.log(data)
                this.setState(prevState => {
                    
                    const members = prevState.members
                    return {
                        members
                    }
                })
            })
            
    }
    
    render(){
        
        return(
            <div id="infoContainer">
        
                <Member
                handleUpdate={this.props.handleUpdate} 
                members={this.props.members}
                handleDelete={this.handleDelete}/>
                             
            </div>
        )
    }
}

export default InfoContainer