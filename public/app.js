// const e = require("express")

//all React Component created there in app.js since export and import keep giving some errors
class Confirmation extends React.Component {
    constructor(props) {
        super(props)

        this.confirm = this.confirm.bind(this)
    }

    confirm() {
        this.props.confirmAccount()
    }

    render() {
        return (
            <div>
                <ul> Confirm Your Details
                    {/* <li name='name'> Name : {this.props.name}</li>
                    <li name='email'> Name : {this.props.email}</li>
                    <li name='city'> Name : {this.props.city}</li> */}
                </ul>
                <button className='confitmbtn' onClick={this.confirm}>Confirm</button>
            </div>
        )
    }

}

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.chickOut = this.chickOut.bind(this)

    }

    chickOut(event) {
        event.preventDefault()
        this.props.nextForm()
        console.log(" start clicked")

    }

    render() {
        return (
            <div>
                <h3>Checkout</h3>
                <br />
                <button className="checkoutbtn" onClick={this.chickOut}>Start Checkout</button>
            </div>
        )
    }

}

class FormThree extends React.Component {
    constructor(props) {
        super(props)
        this.next = this.next.bind(this)

    }
    next() {
        this.props.nextForm()
    }
    render() {

        return (
            <div>
                <h3>Billing Form</h3>
                <form>
                    <label>
                        Credit Card Number <input name='ccNo' />
                    </label>
                    <br />
                    <label>
                        Expiry Date <input name='expirydate' type='date' />
                    </label>
                    <br />
                    <br />
                    <label>
                        CCV <input name='ccv' />
                    </label>
                    <br />
                    <br />
                    <label>
                        Billing Zip Code <input name='bzip' />
                    </label>
                    <button className='nextform' onClick={this.next}> Next </button>

                </form>
            </div>
        )
    }
}

class FormTwo extends React.Component {
    constructor(props) {
        super(props)
        this.next = this.next.bind(this)

    }
    next() {
        this.props.nextForm()
    }

    render() {

        return (
            <div>
                <h3>Shipping Info</h3>
                <form>
                    <label>
                        Address line 1 <input name='addressline1' onChange={this.props.getInfo} />
                    </label>
                    <br />
                    <label>
                        Address line 2 <input name='addressline2' onChange={this.props.getInfo} />
                    </label>
                    <br />
                    <br />
                    <label>
                        City <input name='city' onChange={this.props.getInfo} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Stata <input name='state1' onChange={this.props.getInfo} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Zip Code <input name='zip' onChange={this.props.getInfo} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Phone Number <input name='phoneNo' onChange={this.props.getInfo} />
                    </label>
                    <button className='nextform' onClick={this.next}>Next </button>

                </form>
            </div>

        )

    }
}
class FormOne extends React.Component {
    constructor(props) {
        super(props)
        this.next = this.next.bind(this)
    }
    next() {
        this.props.nextForm()
    }

    render() {

        return (
            <div>
                <h3>Create Account</h3>
                <form>
                    <label>
                        Name <input name='name' onChange={this.props.getInfo} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Email <input name='email' type='email' onChange={this.props.getInfo} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Password <input name='password' type='password' onChange={this.props.getInfo} />
                    </label>
                    <button className='nextform' onClick={this.next}>Next </button>
                </form>
            </div>

        )

    }
}
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nextform: 0,
            name: "",
            email: "",
            password: "",
            addressline1: "",
            city: "",
            state1: "",
            zip: "",
            phoneNo: ""


        }
        this.nextForm = this.nextForm.bind(this)
        this.confirmAccount = this.confirmAccount.bind(this)
        this.createAccount = this.createAccount.bind(this)
        this.getInfo = this.getInfo.bind(this)
    }

    //function that will turn to next form when click on the next button
    nextForm() {
        this.setState({
            nextform: this.state.nextform + 1
        })
        console.log(this.state.nextform)
        console.log(this.state.name)
    }
    // go back to the home bage when click on comfirm button
    confirmAccount() {
        this.setState({
            nextform: this.state.nextform - 4
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
            password: this.state.password,
            addressline1: this.state.addressline1,
            addressline2: this.state.addressline2,
            city: this.state.city,
            state1: this.state.state1,
            zip: this.state.zip,
            phoneNo: this.state.phoneNo
        }
        //send post request to the server with the account info 
        axios.post('./account', accountinfo).then(response => {

        })

    }

    render() {

        if (this.state.nextform === 0) {
            return (<HomePage nextForm={this.nextForm} ></HomePage>)
        }

        else if (this.state.nextform === 1) {
            return (<FormOne nextForm={this.nextForm} getInfo={this.getInfo}></FormOne>)
        }
        else if (this.state.nextform === 2) {
            return (<FormTwo nextForm={this.nextForm} getInfo={this.getInfo}></FormTwo>)
        }
        else if (this.state.nextform === 3) {
            return (<FormThree nextForm={this.nextForm} getInfo={this.getInfo}></FormThree>)
        }
        else if (this.state.nextform === 4) {
            return (<Confirmation confirmAccount={this.confirmAccount} ></Confirmation>)
        }
    }
}






var app = document.getElementById("app");
ReactDOM.render(<App />, app);

