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
        console.log("hello")
    }

    render(){
        return(
            <div id="memberRow">

                {/* ADD ROW CONTENT FOR MEMBER HERE */}

                <button onClick={this.handleOpenModal}>Edit Member</button>
                <ReactModal 
                isOpen={this.state.showModal} 
                contentLabel="View Member Details"
                ariaHideApp={false}>
                
                {/* ADD MODAL CONTENT HERE */}

                <button onClick={this.handleCloseModal}>Close</button>
                </ReactModal>
            </div>
        )
    }
}

export default Member