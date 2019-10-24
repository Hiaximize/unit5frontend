import React from 'react'
import ReactModal from 'react-modal'
import Moment from 'react-moment'


class Member extends React.Component{
    constructor(){
        super()
        this.state={
            showModal: false
            
        }

        this.handleOpenModal = this.handleOpenModal.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleUpdate(){
        this.props.handleUpdate()
    }

    handleChange(event){
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    
    handleDelete(){
        this.props.handleDelete()
    }    

    handleView(){
        this.props.handleView()
    }

    handleOpenModal(){
        this.setState({
            showModal: true
        })
    }

    handleCloseModal(){
        this.setState({
            showModal: false
        })
    }

    render(){
        
        return(
            <div>
            {this.props.members.map((member, index)=>
            // <Moment format="YYYY/MM/DD">{let date={member.startDate}</Moment>
            <div id="memberRow" key={index}>
                
                    <div className="memberRowInfo"> 
                        <li id={index+1} className="index_name memberName info"><span id="indexNumber">{index+1}</span> <span id="name">{member.firstName} {member.lastName}</span></li> <li id="date" className="date info"><Moment format="MM/DD/YYYY">{member.startDate}</Moment></li> <li className="phoneNumber info">{member.phoneNumber}</li> <li className="email info">{member.email}</li> <li id="membershipType" className="membershipTypes">{/*{console.log(member)}*/}
                        {member.basic ? "Basic" : ''}{member.silver ? "Silver" : ''}
                        {member.premium ? "Premium" : ''}
                        </li>
                    </div>
                    <div id="memberButtonContainer">
                        <li id={"button"+ index+1} className="editMemberButton" onClick={()=> {this.props.handleView('update')}}>Edit</li>

                    </div>
                {/* <ReactModal
                overlayClassName="overlay" 
                className="modal"
                handleUpdate={this.props.handleUpdate} 
                isOpen={this.state.showModal} 
                contentLabel="View Member Details"
                ariaHideApp={false}
                members={this.props.members}
                handleChange={this.handleChange}>
                
                    <div id="UpdateMemberContainer">
                <div id="formContainer">
                    <form id="updateMemberForm" onSubmit={this.props.handleUpdate}>
                        <fieldset>
                            <legend className="updateMemberLegend">Member Information</legend>
                                <input name="updateMemberFirstName" type="text" id="updateMemberFirstName"  className="updateMemberInput" value={member.firstName} onChange={this.handleChange} required />

                                <input name="updateMemberLastName" type="text" id="updateMemberLastName"
                                value={member.lastName}
                                onChange={this.handleChange}className="updateMemberInput" placeholder="Last Name" required />

                                <input name="updateMemberNumber" type="number" id="updateMemberPhoneNumber"
                                value={member.phoneNumber}
                                onChange={this.handleChange}
                                className="updateMemberInput" placeholder="Phone Number" required />

                                <input name="updateMemberAddress" type="text" id="updateMemberAddress" 
                                value={member.address}
                                onChange={this.handleChange}
                                className="updateMemberInput" placeholder="Address" required /><br />

                                <input name="updateMemberCity" type="text" id="updateMemberCity" 
                                value={member.city}
                                onChange={this.handleChange}className="updateMemberInput" placeholder="City" required />

                                <input name="updateMemberState" type="text" id="updateMemberState" 
                                value={member.state}
                                onChange={this.handleChange}className="updateMemberInput" placeholder="State" required />

                                <input name="updateMemberZip" type="number" id="updateMemberZip" 
                                value={member.zip}
                                onChange={this.handleChange}className="updateMemberInput" placeholder="Zip" required />

                                <input name="updateMemberEmail" type="email" id="updateMemberEmailAddress" placeholder="Email" 
                                value={member.email}
                                onChange={this.handleChange}className="updateMemberInput" required />                              

                                <br />

                                <div id="updateMemberSecondRow">
                                    <div id="leftHalfSecondRow">
                                        <fieldset id="membershipInfo">
                                            <legend className="updateMemberLegend">Update Member</legend>

                                            <label id="basicLabel" className="updateMemberLabel" htmlFor="updateMemberCheckBoxBasicMembership">Basic</label>
                                            <input type="radio" id="updateMemberCheckBoxBasicMembership" 
                                            value={member.basic} onChange={this.handleChange}className="updateMemberInput updateMemberCheckBox" />

                                            <label id="silverLabel" className="updateMemberLabel" htmlFor="updateMemberCheckBoxSilverMembership">Silver</label>
                                            <input name="updateMemberSilver" type="radio" 
                                            value={member.silver}
                                            onChange={this.handleChange}className="updateMemberInput updateMemberCheckBox" id="updateMemberCheckBoxSilverMembership" />

                                            <label id="Premium" className="updateMemberLabel" htmlFor="updateMemberCheckBoxPremiumMembership">Premium</label>
                                            <input name="updateMemberPremium" type="radio" id="updateMemberCheckBoxPremiumMembership" 
                                            value={member.premium}
                                            onChange={this.handleChange}className="updateMemberInput updateMemberCheckBox" /><br />

                                            
                                            <label htmlFor="updateMemberStartDate">Start Date</label>
                                            <input name="updateMemberStartDate" id="updateMemberStartDate" 
                                            value={member.startDate ? member.startDate.slice(0,9):''} onChange={this.handleChange}className="updateMemberInput updateMemberDates" placeholder="Start Date" type="date" />   

                                              */}


                                            {/*{console.log("////////////")}
                                            {console.log("start date:", typeof member.startDate)}
                                            {console.log("dueDate:", member.dueDate)}
                                            {console.log("/////////")}
                                            {member.startDate ? console.log(member.startDate.slice(0,9)):''}
                                            {/* <input name="updateMemberDueDate" id="updateMemberDueDate" 
                                            value={member.dueDate}
                                            onChange={this.handleChange}className="updateMemberInput updateMemberDates" placeholder="Due Date" type="date" required /> */}
 {/*}                                       </fieldset>
                                
                                        <div id="bottomRow">
                                            <textarea rows="10" name="updateMemberNotes" id="updateMemberNotes" 
                                            value={member.notes}
                                            onChange={this.handleChange}className="updateMemberInput" placeholder="Notes" />
                                        
                                            <input type="submit" id="updateMemberSubmitButton" value="UPDATE MEMBER" />

                                            <button id="updateMemberCancelButton" onClick={
                                                this.handleCloseModal
                                            }>CANCEL</button>
                                            
                                        </div>

                                    </div>

                                    <div id="updateMemberProfilePhotoContainer">
                                        <img src="placeholder.png" id="updateMemberPicture" alt="profileImage"/>
                                        <li onClick={this.handleDelete} id="updateMemberDelete">Delete Member</li>
                                    </div>
                                </div>
                                
                        </fieldset>
                    </form>
                </div>
            </div>

                </ReactModal> */}
            </div>)}
        </div>
        )
    }
}

export default Member