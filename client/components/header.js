import React, {Component} from 'react'

class Header extends Component {
    constructor() {
        super();
        this.refresh = this.refresh.bind(this);
    }

    refresh() {
        window.location.reload();
    }


    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img onClick={this.refresh} />
                </div>
            </div>
        )
    }
}

export default Header;
