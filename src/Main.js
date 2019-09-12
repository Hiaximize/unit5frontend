import React from 'react'
import Header from './Header.js'
import MyStickyFooter from './StickyFooter.js'
import InfoContainer from './InfoContainer.js'

class Main extends React.Component{
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