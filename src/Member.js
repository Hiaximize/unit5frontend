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
                <h6>{member.firstName} {member.lastName}</h6>  <h6>{member.dueDate}</h6> <h6>{member.phoneNumber}</h6> <h6>{member.email}</h6>
                <button onClick={this.handleOpenModal}>Edit Member</button>
                <ReactModal 
                isOpen={this.state.showModal} 
                contentLabel="View Member Details"
                ariaHideApp={false}>
                
                    <div id="UpdateMemberContainer">
                <div id="formContainer">
                    <form id="addMemberForm">
                        <fieldset>
                            <legend>Member Information</legend>
                                <input name="addMemberFirstName" type="text" id="addMemberFirstName"  className="addMemberInput" placeholder="First Name" required />

                                <input name="addMemberLastName" type="text" id="addMemberLastName" className="addMemberInput" placeholder="Last Name" required />

                                <input name="addMemberNumber" type="number" id="addMemberPhoneNumber" className="addMemberInput" placeholder="Phone Number" required />

                                <input name="addMemberAddress" type="text" id="addMemberAddress" className="addMemberInput" placeholder="Address" required /><br />

                                <input name="addMemberCity" type="text" id="addMemberCity" className="addMemberInput" placeholder="City" required />

                                <input name="addMemberState" type="text" id="addMemberState" className="addMemberInput" placeholder="State" required />

                                <input name="addMemberZip" type="number" id="addMemberZip" className="addMemberInput" placeholder="Zip" required />

                                <input name="addMemberEmail" type="email" id="addMemberEmailAddress" placeholder="Email" className="addMemberInput" required />                              

                                <br />

                                <div id="addMemberSecondRow">
                                    <div id="leftHalfSecondRow">
                                        <fieldset id="membershipInfo">
                                            <legend>Membership Information</legend>

                                            <label id="basicLabel" className="addMemberLabel" htmlFor="addMemberCheckBoxBasicMembership">Basic</label>
                                            <input type="checkbox" id="addMemberCheckBoxBasicMembership" className="addMemberInput addMemberCheckBox" />

                                            <label id="silverLabel" className="addMemberLabel" htmlFor="addMemberCheckBoxSilverMembership">Silver</label>
                                            <input name="addMemberSilver" type="checkbox" className="addMemberInput addMemberCheckBox" id="addMemberCheckBoxSilverMembership" />

                                            <label id="Premium" className="addMemberLabel" htmlFor="addMemberCheckBoxPremiumMembership">Premium</label>
                                            <input name="addMemberPremium" type="checkbox" id="addMemberCheckBoxPremiumMembership" className="addMemberInput addMemberCheckBox" /><br />

                                            {/* may cause issues here */}
                                            <input name="addMemberStartDate" id="addMemberStartDate" className="addMemberInput addMemberDates" placeholder="Start Date" type="date" required />

                                            <input name="addMemberDueDate" id="addMemberDueDate" className="addMemberInput addMemberDates" placeholder="Due Date" type="date" required />
                                        </fieldset>
                                
                                        <div id="bottomRow">
                                            <textarea rows="10" name="addMemberNotes" id="addMemberNotes" className="addMemberInput" placeholder="Notes" />
                                        
                                            <input type="submit" id="addMemberSubmitButton" value="UPDATE MEMBER" />

                                            <button id="addMemberCancelButton" onClick={
                                                this.handleCloseModal
                                            }>CANCEL</button>
                                            
                                        </div>

                                    </div>

                                    <div id="addMemberProfilePhotoContainer">
                                        <img src="placeholder.png" id="addMemberPicture" alt="profileImage"/>
                                        
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