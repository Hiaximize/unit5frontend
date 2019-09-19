import React from 'react'
import Header from './Header.js'
import MyStickyFooter from './StickyFooter.js'
import InfoContainer from './InfoContainer.js'
import AddMember from './AddMember.js'
import Calendar from './Calendar.js'

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state={
            view: {
                pageTitle: 'home',
                page: 'home',
            },
            members: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleView = this.handleView.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCreate = this.handleCreate.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        // this.handleDelete = this.handleDelete.bind(this)

        
    }

    fetchMembers = () => {
        fetch('https://membershiptrackerbackend.herokuapp.com/members', {
                method: "GET",
                mode: "cors"
            }).then(data => {
                return data.json()
            })
            .then(json => this.setState({
                members: json
            }))
    }


    handleCreate(createdMember){
        fetch('https://membershiptrackerbackend.herokuapp.com/members', {
            body: JSON.stringify(createdMember),
            method: "POST",
            headers: {
                "Accept": "application/json, text/plain, */*", 
                "Content-Type": "application/json"
            } 
        }).then(createdMember=>{
            return createdMember.json()
        }).then(jsonMember => {
            this.setState(prevState=>{
                prevState.members.push(jsonMember)
                this.props.handleView('home')
                return { members: prevState.members}
                // this.fetchMembers()
            })
        })
    }

    handleUpdate(updatedMember){
        fetch(`/members/${updatedMember._id}`, {
            body: JSON.stringify(updatedMember),
            method: "PUT",
            headers: {
                "Accept": "application/json, text/plain, */*", 
                "Content-Type": "application/json"
            }
        }).then(updatedMember => {
            this.props.handleView('home')
            this.fetchMembers()
        })
    }

    // handleDelete(_id){
    //     fetch(`/members/${_id}`, {
    //         method: "DELETE",
    //         headers: {
    //             "Accept": "application/json, text/plain, */*",
    //             "Content-Type": "application/json"
    //         }
    //     }).then(deletedMember => {
    //         const members = prevState.members.filter(member => member._id !== _id)
    //         return {members}
    //     })
    // }
   
    handleSubmit(event){
        event.preventDefault()
        this.handleCreate(this.state)
    }

    handleChange(event){
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleView(view){
        let pageTitle = ''
        switch(view){
            case 'home':
                pageTitle = 'Home'
                break
            case 'addMember':
                pageTitle = "Add Member"
                break
            case 'calendar':
                pageTitle = "Calendar"
                break
            default:
                break
        }
        this.setState({
            view: { 
                page: view,
                pageTitle: pageTitle
            }
        })
    }

    componentDidMount(){
        this.fetchMembers()
    }

    render(){
        return(
            <div id="main">
                
                <Header 
                view={this.state.view}
                handleChange={this.handleChange}
                handleView={this.handleView}/>

                {this.state.view.page==='home' ?
                <InfoContainer
                members={this.state.members} 
                view={this.state.view}
                handleChange={this.handleChange}
                handleView={this.handleView}/> : ''}

                {this.state.view.page==='calendar' ?
                <Calendar 
                view={this.state.view}
                handleChange={this.handleChange}
                handleView={this.handleView}/> : ''}

                {this.state.view.page==='addMember' ?
                <AddMember
                handleSubmit={this.handleSubmit}
                handleCreate={this.handleCreate} 
                view={this.state.view}
                handleChange={this.handleChange}
                handleView={this.handleView}/> : ''}

                <MyStickyFooter />
            
            </div>
        )
    }
}

export default Main