import React from 'react'

const Header = () => {
    constructor() {
        super();
        this.refresh = this.refresh.bind(this);
    }

    refresh() {
        window.location.reload();
    }

    return (
        <div className="header">
            <div className="logo">
                <img onClick={this.refresh} />
            </div>
        </div>
    )
}

export default Header;
