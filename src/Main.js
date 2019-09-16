import React from 'react'
import Header from './Header.js'
import MyStickyFooter from './StickyFooter.js'
import InfoContainer from './InfoContainer.js'

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state={
            view: {
                pageTitle: '',
                page: ''
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleView = this.handleView.bind(this)
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
            page: view,
            pageTitle: pageTitle
        })
    }

    render(){
        return(
            <div>
                
                <Header />

                <InfoContainer />

                <MyStickyFooter />
            
            </div>
        )
    }
}

export default Main