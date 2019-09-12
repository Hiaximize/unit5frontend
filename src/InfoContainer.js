import React from 'react'
import Member from './Member.js'

class InfoContainer extends React.Component{
    render(){
        return(
            <div id="infoContainer">
               
                <table>
                    <theader className="tableHeader">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Membership Type</th>
                        <th>Due Date</th>
                    </theader>
                    <tbody>
                        
                            <Member />
                        
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default InfoContainer