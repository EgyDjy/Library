import React, { Component } from 'react';

class Media extends Component {
    render() {
        return (
            <div className="media my-3">
                <h5 className="mt-0">{this.props.title}</h5>
                <img
                    src={process.env.PUBLIC_URL + "/image/" + this.props.image}
                    className="mr-3"
                    alt="media"
                    width="100"
                />
                <div className="d-flex flex-column">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export default Media;