import React from 'react'

class AddMember extends React.Component{
    constructor(props){
        super(props)
        this.state={
            _id: null,
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            email: '',
            basic: '',
            silver: '',
            premium: '',
            startDate: '',
            dueDate: '',
            notes: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        console.log("im in handle submit")
        console.log(this.props)
        console.log(this.state)
        this.props.handleCreate(this.state)
    }

    render(){
        return(
            <div id="addMemberContainer">
                <div id="formContainer">
                    <form id="addMemberForm" onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend>Member Information</legend>
                                <input name="firstName" value={this.state.firstName} onChange={this.handleChange} type="text" id="firstName"  className="addMemberInput" placeholder="First Name" required />

                                <input name="lastName" value={this.state.lastName} onChange={this.handleChange} type="text" id="lastName" className="addMemberInput" placeholder="Last Name" required />

                                <input name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} type="number" id="phoneNumber" className="addMemberInput" placeholder="Phone Number" required />

                                <input name="address" type="text" id="address" value={this.state.address} onChange={this.handleChange} className="addMemberInput" placeholder="Address" required /><br />

                                <input name="city" value={this.state.city} onChange={this.handleChange} type="text" id="city" className="addMemberInput" placeholder="City" required />

                                <input name="addMemberState" type="text" value={this.state.state} onChange={this.handleChange} id="state" className="addMemberInput" placeholder="State" required />

                                <input name="addMemberZip" value={this.state.zip} onChange={this.handleChange} type="text" id="zip" className="addMemberInput" placeholder="Zip" required />

                                <input name="addMemberEmail" value={this.state.email} onChange={this.handleChange} type="email" id="email" placeholder="Email" className="addMemberInput" required />                              

                                <br />

                                <div id="addMemberSecondRow">
                                    <div id="leftHalfSecondRow">
                                        <fieldset id="membershipInfo">
                                            <legend>Membership Information</legend>

                                            <label id="basicLabel" className="addMemberLabel" htmlFor="basic">Basic</label>
                                            <input type="checkbox" value={this.state.basic} onChange={this.handleChange} id="basic" className="addMemberInput addMemberCheckBox" />

                                            <label id="silverLabel" className="addMemberLabel" htmlFor="silver">Silver</label>
                                            <input name="addMemberSilver" type="checkbox" className="addMemberInput addMemberCheckBox" id="silver" value={this.state.silver} onChange={this.handleChange} />

                                            <label id="Premium" className="addMemberLabel" htmlFor="premium">Premium</label>
                                            <input name="addMemberPremium" value={this.state.premium} onChange={this.handleChange} type="checkbox" id="premium" className="addMemberInput addMemberCheckBox" /><br />

                                            {/* may cause issues here */}
                                            <input name="addMemberStartDate" id="addMemberStartDate" className="addMemberInput addMemberDates" placeholder="Start Date" type="date" required 
                                            onChange={this.handleChange}/>

                                            <input name="addMemberDueDate" id="addMemberDueDate" className="addMemberInput addMemberDates" placeholder="Due Date" type="date" required 
                                            onChange={this.handleChange}/>
                                        </fieldset>
                                
                                        <div id="bottomRow">
                                            <textarea rows="10" value={this.state.notes} onChange={this.handleChange} name="addMemberNotes" id="notes" className="addMemberInput" placeholder="Notes" />
                                        
                                            <input type="submit" id="addMemberSubmitButton" value="ADD MEMBER" />

                                            <button id="addMemberCancelButton" onClick={()=>{
                                                this.props.handleView('home')
                                            }}>Cancel</button>
                                            
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
        )
    }
}

export default AddMember