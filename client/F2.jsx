class FormTwo extends React.Component {
    constructor(props) {
        super(props)
        this.next = this.next.bind(this)

    }

    render() {

        return (
            <div>
                <h3>Shipping Info</h3>
                <form>
                    <label>
                        Address line 1 <input name='addressline1' />
                    </label>
                    <br />
                    <label>
                        Address line 2 <input name='addressline2' />
                    </label>
                    <br />
                    <br />
                    <label>
                        City <input name='city' />
                    </label>
                    <br />
                    <br />
                    <label>
                        Stata <input name='state' />
                    </label>
                    <br />
                    <br />
                    <label>
                        Zip Code <input name='zip' />
                    </label>
                    <br />
                    <br />
                    <label>
                        Phone Number <input name='phoneNo' />
                    </label>
                    <button class='nextform' onClick={this.next}>Next </button>

                </form>
            </div>

        )

    }
}
export default FormTwo