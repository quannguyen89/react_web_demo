import React from 'react';
class House extends React.Component {

    constructor() {
        super();
    }

    getHouseTypeClass() {
        return this.props.house.type === 'House for sale' ? 'sale' : 'move'
    }

    render() {
        return (
            <article className="row">
                <figure data-photourl={this.props.house.thumbnail} className="col-md-3">
                    <img src={this.props.house.thumbnail} alt={this.props.house.address}/>
                </figure>
                <div className="property-info col-md-9">
                    <strong>
                        <dt className="property-address">{this.props.house.address}</dt>
                    </strong>
                    <dt>
                        <span className={this.getHouseTypeClass()}></span>
                        <span>{this.props.house.type}</span>
                        <sup>®</sup>
                    </dt>
                    <dt className="price">
                        <span>${this.props.house.price}</span>
                    </dt>
                    <dt className="publish-from">
                        <span>{this.props.house.publishFrom} days on Hobao</span>
                    </dt>
                </div>
            </article>
        );
    }
}

export default House;
