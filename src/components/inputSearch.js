import React from 'react'

const style ={
    padding: '0px 15px'
}


export default class InputSearch extends React.Component {
    constructor() {
        super();

        this.state = {
            label: ''
        }

        this.onLabelChange = (event) => {
            this.setState({
                label: event.target.value
            })
        }

        this.onSubmit = (event) => {
            event.preventDefault()
            this.props.onAdded(this.state.label)
            this.setState({label: ''})
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="input-group mb-3" style={style}>
                    <input type="text"
                           className="form-control"
                           value={this.state.label}
                           placeholder="Create new todo"
                           aria-label="Recipient's username"
                           aria-describedby="basic-addon2"
                           onChange={this.onLabelChange}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary"
                                type="submit">
                            Button
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}
