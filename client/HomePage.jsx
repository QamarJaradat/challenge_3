import e from "express"

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.chickOut = this.chickOut.bind(this)

    }

    chickOut(event) {
        // event.preventDefault()

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
export default HomePage