import HomePage from "./HomePage"
import F1 from "./F1"
import F2 from "./F2"
import F3 from "./F3"
import Confirmation from "./confirmation"

import axios from 'axios'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nextform: 0,
            name: "",
            email: "",
            password: ""
        }
        this.nextForm = this.nextForm.bind(this)
        this.confirmAccount = this.confirmAccount.bind(this)
        this.createAccount = this.createAccount.bind(this)
        this.getInfo = this.getInfo.bind(this)
    }

    //function that will turn to next form when click on the next button
    nextForm() {
        this.setState({
            nextform: this.state.nextform++
        })
    }
    // go back to the home bage when click on comfirm button
    confirmAccount() {
        this.setState({
            nextform: this.state.nextform - 3
        })
    }
    //collect data from forms and change the state values
    //each form input has the same name as one of the state value 
    getInfo(e) {
        this.setState({
            [e.target.name]: e.target.value

        })
    }
    createAccount(e) {
        var accountinfo = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        //send post request to the server with the account info from first form
        axios.post('./account', accountinfo).then(response => {

        })

    }

    render() {

        if (this.state.nextform === 0) {
            return (<HomePage nextForm={this.nextForm} ></HomePage>)
        }

        else if (this.state.nextform === 1) {
            return (<F1 nextForm={this.nextForm}></F1>)
        }
        else if (this.state.nextform === 2) {
            return (<F2 nextForm={this.nextForm}></F2>)
        }
        else if (this.state.nextform === 3) {
            return (<F3 nextForm={this.nextForm}></F3>)
        }
        else if (this.state.nextform === 4) {
            return (<Confirmation nextForm={this.nextForm} confirmAccount={this.confirmAccount} info={this.state}></Confirmation>)
        }
    }
}

export default App

