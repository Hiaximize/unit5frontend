import React from 'react'
import ReactModal from 'react-modal'


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
            <div id="memberRow" key={index}>
                    <div className="memberRowInfo"> 
                        <h3 id={index} className="memberName info">{member.firstName}{index}  {member.lastName}</h3> <h3 className="date info">{member.dueDate}</h3> <h3 className="phoneNumber info">{member.phoneNumber}</h3> <h3 className="email info">{member.email}</h3>
                    </div>
                    <div id="memberButtonContainer">
                        <button id="editMemberButton" onClick={this.handleOpenModal}>Edit Member</button>
                    </div>
                <ReactModal className="modal"
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
                            <legend>Member Information</legend>
                                <input name="updateMemberFirstName" type="text" id="updateMemberFirstName"  className="updateMemberInput" placeholder="First Name"  required />

                                <input name="updateMemberLastName" type="text" id="updateMemberLastName" className="updateMemberInput" placeholder="Last Name" required />

                                <input name="updateMemberNumber" type="number" id="updateMemberPhoneNumber" className="updateMemberInput" placeholder="Phone Number" required />

                                <input name="updateMemberAddress" type="text" id="updateMemberAddress" className="updateMemberInput" placeholder="Address" required /><br />

                                <input name="updateMemberCity" type="text" id="updateMemberCity" className="updateMemberInput" placeholder="City" required />

                                <input name="updateMemberState" type="text" id="updateMemberState" className="updateMemberInput" placeholder="State" required />

                                <input name="updateMemberZip" type="number" id="updateMemberZip" className="updateMemberInput" placeholder="Zip" required />

                                <input name="updateMemberEmail" type="email" id="updateMemberEmailAddress" placeholder="Email" className="updateMemberInput" required />                              

                                <br />

                                <div id="updateMemberSecondRow">
                                    <div id="leftHalfSecondRow">
                                        <fieldset id="membershipInfo">
                                            <legend>Update Member</legend>

                                            <label id="basicLabel" className="updateMemberLabel" htmlFor="updateMemberCheckBoxBasicMembership">Basic</label>
                                            <input type="checkbox" id="updateMemberCheckBoxBasicMembership" className="updateMemberInput updateMemberCheckBox" />

                                            <label id="silverLabel" className="updateMemberLabel" htmlFor="updateMemberCheckBoxSilverMembership">Silver</label>
                                            <input name="updateMemberSilver" type="checkbox" className="updateMemberInput updateMemberCheckBox" id="updateMemberCheckBoxSilverMembership" />

                                            <label id="Premium" className="updateMemberLabel" htmlFor="updateMemberCheckBoxPremiumMembership">Premium</label>
                                            <input name="updateMemberPremium" type="checkbox" id="updateMemberCheckBoxPremiumMembership" className="updateMemberInput updateMemberCheckBox" /><br />

                                            {/* may cause issues here */}
                                            <input name="updateMemberStartDate" id="updateMemberStartDate" className="updateMemberInput updateMemberDates" placeholder="Start Date" type="date" required />

                                            <input name="updateMemberDueDate" id="updateMemberDueDate" className="updateMemberInput updateMemberDates" placeholder="Due Date" type="date" required />
                                        </fieldset>
                                
                                        <div id="bottomRow">
                                            <textarea rows="10" name="updateMemberNotes" id="updateMemberNotes" className="updateMemberInput" placeholder="Notes" />
                                        
                                            <input type="submit" id="updateMemberSubmitButton" value="UPDATE MEMBER" />

                                            <button id="updateMemberCancelButton" onClick={
                                                this.handleCloseModal
                                            }>CANCEL</button>
                                            
                                        </div>

                                    </div>

                                    <div id="updateMemberProfilePhotoContainer">
                                        <img src="placeholder.png" id="updateMemberPicture" alt="profileImage"/>
                                        <li onClick={this.props.handleDelete} id="updateMemberDelete">Delete Member</li>
                                    </div>
                                </div>
                                
                        </fieldset>
                    </form>
                </div>
            </div>

                </ReactModal>
            </div>)}
        </div>
        )
    }
}

export default Member