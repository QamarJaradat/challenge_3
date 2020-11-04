class FormThree extends React.Component {
    constructor(props) {
        super(props)
        this.next = this.next.bind(this)

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
                    <button class='nextform' onClick={this.next}> Next </button>

                </form>
            </div>
        )
    }
}

export default FormThree