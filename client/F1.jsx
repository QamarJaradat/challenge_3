class FormOne extends React.Component {
    constructor(props) {
        super(props)
        this.next = this.next.bind(this)
    }

    render() {

        return (
            <div>
                <h3>Create Account</h3>
                <form>
                    <label>
                        Name <input name='name' />
                    </label>
                    <br />
                    <br />
                    <label>
                        Email <input name='email' type='email' />
                    </label>
                    <br />
                    <br />
                    <label>
                        Password <input name='password' type='password' />
                    </label>
                    <button class='nextform' onClick={this.next}>Next </button>
                </form>
            </div>

        )

    }
}
export default FormOne