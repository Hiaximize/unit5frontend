import React from 'react'

class UpdateMember extends React.Component{
    render(){
        return(
            <div id="addMemberContainer">
                <div id="formContainer">
                    <form id="addMemberForm"
                        onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend> Member Information </legend>
                            <input name="firstName"
                                value={this.props.firstName}
                                onChange={this.handleChange}
                                type="text"
                                id="firstName"
                                className="addMemberInput"
                                placeholder="First Name"
                                required />

                            <input name="lastName"
                                value={this.props.lastName}
                                onChange={this.handleChange}
                                type="text"
                                id="lastName"
                                className="addMemberInput"
                                placeholder="Last Name"
                                required />

                            <input name="phoneNumber"
                                value={this.props.phoneNumber}
                                onChange={this.handleChange}
                                type="number"
                                id="phoneNumber"
                                className="addMemberInput"
                                placeholder="Phone Number"
                                required />

                            <input name="address"
                                type="text"
                                id="address"
                                value={this.props.address}
                                onChange={this.handleChange}
                                className="addMemberInput"
                                placeholder="Address"
                                required /> < br />

                            <input name="city"
                                value={this.props.city}
                                onChange={this.handleChange}
                                type="text"
                                id="city"
                                className="addMemberInput"
                                placeholder="City"
                                required />

                            <input name="addMemberState"
                                type="text"
                                value={this.props.state}
                                onChange={this.handleChange}
                                id="state"
                                className="addMemberInput"
                                placeholder="State"
                                required />

                            <input name="addMemberZip"
                                value={this.props.zip}
                                onChange={this.handleChange}
                                type="text"
                                id="zip"
                                className="addMemberInput"
                                placeholder="Zip"
                                required />

                            <input name="addMemberEmail"
                                value={this.props.email}
                                onChange={this.handleChange}
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="addMemberInput"
                                required />

                            <br />

                            <div id="addMemberSecondRow" >
                                <div id="leftHalfSecondRow" >
                                    <fieldset id="membershipInfo" >
                                        <legend > Membership Information </legend>
                                        <label id="basicLabel"
                                            className="addMemberLabel"
                                            htmlFor="basic"> Basic </label>
                                        <input type="radio"
                                            onChange={this.handleChange}
                                            id="basic"
                                            className="addMemberInput addMemberCheckBox" />

                                        <label id="silverLabel"
                                            className="addMemberLabel"
                                            htmlFor="silver" > Silver </label>
                                        <input name="addMemberSilver"
                                            type="radio"
                                            className="addMemberInput addMemberCheckBox"
                                            id="silver"
                                            onChange={this.handleChange}
                                        />

                                        <label id="Premium"
                                            className="addMemberLabel"
                                            htmlFor="premium" > Premium </label>
                                        <input name="addMemberPremium"
                                            onChange={this.handleChange}
                                            type="radio"
                                            id="premium"
                                            className="addMemberInput addMemberCheckBox" /> <     br />

                                        { /* may cause issues here */}
                                        <label htmlFor="addMemberStartDate" > Start Date  </label>     <input name="addMemberStartDate"
                                            id="addMemberStartDate"
                                            className="addMemberInput addMemberDates"
                                            placeholder="Start Date"
                                            type="date"
                                            onChange={this.handleChange}
                                        />

                                        <p id="dueDate"> </p> {
                    
                                        }
                                    </fieldset>

                                    <div id="bottomRow" >
                                        <textarea rows="10"
                                            value={this.props.notes}
                                            onChange={this.handleChange}
                                            name="addMemberNotes"
                                            id="notes"
                                            className="addMemberInput"
                                            placeholder="Notes" />

                                        <input type="submit"
                                            onClick={this.props.handleUpdate}
                                            id="addMemberSubmitButton"
                                            value="UPDATE MEMBER" />

                                        <button id="addMemberCancelButton"
                                            onClick={() => { this.props.handleView('home') }}> Cancel </button>

                                    </div>

                                </div>

                                <div id="addMemberProfilePhotoContainer" >
                                    <img src="placeholder.png"
                                        id="addMemberPicture"
                                        alt="profileImage" />

                                </div>
                            </div>

                        </fieldset>
                    </form>
                </div>
            </div>
            // <h1>Testing</h1>
        )
    }
}

export default UpdateMember