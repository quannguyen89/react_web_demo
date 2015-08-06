import React from 'react';
class House extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <article>
                <figure data-photourl={this.props.house.thumbnail}>
                    <img src={this.props.house.thumbnail} alt={this.props.house.address}/>
                </figure>
                <div className="property-info">
                    <strong>
                        <dt className="property-address">{this.props.house.address}</dt>
                    </strong>
                </div>
            </article>
        );
    }
}

export default House;
