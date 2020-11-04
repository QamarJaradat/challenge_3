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

export default Confirmation