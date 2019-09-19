import React from 'react'
import Header from './Header.js'
import MyStickyFooter from './StickyFooter.js'
import InfoContainer from './InfoContainer.js'
import AddMember from './AddMember.js'

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state={
            view: {
                pageTitle: 'home',
                page: 'home',
                members: []
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleView = this.handleView.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        fetch('https://membershiptrackerbackend.herokuapp.com/members',{
                method: "GET",
                mode: "cors"
            }).then(data => {
                return data.json()
            })
            .then(json => this.setState({
                members: json
            }))
    }
   
    handleSubmit(event){
        event.preventDefault()
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

    // handleCreate(createdMember){

    // }

    render(){
        return(
            <div id="main">
                
                <Header 
                view={this.state.view}
                handleChange={this.handleChange}
                handleView={this.handleView}/>

                {this.state.view.page==='home' ?
                <InfoContainer 
                view={this.state.view}
                handleChange={this.state.handleChange}
                handleView={this.handleView}/> : ''}

                {this.state.view.page==='addMember' ?
                <AddMember 
                view={this.state.view}
                handleChange={this.handleChange}
                handleView={this.handleView}/> : ''}

                <MyStickyFooter />
            
            </div>
        )
    }
}

export default Main