import React from 'react'
import Header from './Header.js'
import MyStickyFooter from './StickyFooter.js'
import InfoContainer from './InfoContainer.js'
import AddMember from './AddMember.js'
import Calendar from './Calendar.js'
import axios from 'axios'

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
        this.handleCreate = this.handleCreate.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)     
    }

    fetchMembers = () => {
        // fetch('https://membershiptrackerbackend.herokuapp.com/members', {
        fetch('http://localhost:3000/members', {
                method: "GET",
                mode: "cors"
            }
            ).then(data => {
                return data.json()
            })
            .then(json => this.setState({
                members: json
            }))
    }

    handleCreate(createdData){
        console.log(createdData)
        axios({
            method: 'post',
            // url: 'https://membershiptrackerbackend.herokuapp.com/members',
            url: 'http://localhost:3000/members',
            data:{
                firstName: createdData.firstName,
                lastName: createdData.lastName,
                phoneNumber: createdData.phoneNumber,
                address: createdData.address,
                city: createdData.city,
                state: createdData.state,
                zip: createdData.zip,
                email: createdData.email,
                basic: createdData.basic,
                silver: createdData.silver,
                premium: createdData.premium,
                startDate: createdData.addMemberStartDate,
                dueDate: createdData.addMemberDueDate
            }}).then(createdData => {
                this.fetchMembers()
                this.handleView('home')
        }).catch(error=>{
            console.log(error)
        })
    }

    handleUpdate(event, updatedData){
        event.preventDefault()
        console.log("first log statement", updatedData)
        // axios({
        //     method: "PUT",
        //     url: `http://localhost:3000/members/${_id}`,
        //     data: {
        //             firstName: updatedData.firstName,
        //             lastName: updatedData.lastName,
        //             phoneNumber: updatedData.phoneNumber,
        //             address: updatedData.address,
        //             city: updatedData.city,
        //             state: updatedData.state,
        //             zip: updatedData.zip,
        //             email: updatedData.email,
        //             startDate: updatedData.addMemberStartDate,
        //             dueDate: updatedData.addMemberDueDate
        //     }
        // }).then(updatedData => {
        //     console.log("2nd log statement", updatedData)
        //     this.handleView('home')
        //     this.fetchMembers()
        // }).catch(error=>{
        //     console.log(error)
        // })
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
                // updateMembers={this.updateMembers}
                handleUpdate={this.handleUpdate}
                members={this.state.members} 
                view={this.state.view}
                handleChange={this.handleChange}
                handleView={this.handleView}
                handleDelete={this.handleDelete}/> : ''}

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
                handleView={this.handleView}
                members={this.state.members}/> : ''}

                <MyStickyFooter />
            
            </div>
        )
    }
}

export default Main