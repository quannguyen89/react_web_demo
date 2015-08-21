import React from 'react';
import PictureShow from 'react-picture-show';
import StarRating from 'react-star-rating';
import ItemActions from '../actions/itemActions';

class HouseDetail extends React.Component {

    constructor() {
        super();
    }

    getHouseTypeClass() {
        return this.props.house.type === 'House for sale' ? 'sale' : 'move'
    }

    closeDetail() {
        ItemActions.closeDetail();
    }

    renderAgents() {
        return this.props.house.contactAgents.map(agent =>
                (
                    <div className="agent row">
                        <div className="col-md-4">
                            <img src={agent.avatar} alt=""/>
                        </div>
                        <div className="col-md-8">
                            <h4 className="agent-name">{agent.name}</h4>
                            <StarRating name={agent.name} ratingAmount={5} rating={agent.averageRating}
                                        editing={false} size='sm'>
                            </StarRating>
                            <a href="" className="num-rates">({agent.numRates})</a>

                            <p> <span className="badge">{agent.recentSales}</span>Recent sales</p>
                            <span>{agent.phone}</span>
                        </div>
                    </div>
                )
        );
    }

    render() {
        if (this.props.house) {
            var houseImgs = this.props.house.photos.map(photo =>
                    <img src={photo} />
            );
            var agents = this.renderAgents();
        }

        return (
            <div className="row">
                <div className="buttons">
                    <span className='close-btn pull-right' onClick={this.closeDetail}> <i className="fa fa-close"></i>CLOSE </span>
                </div>
                <div className="col-md-12">
                    <PictureShow>
                        {houseImgs}
                    </PictureShow>
                </div>

                <div className="col-md-8 house-detail">
                    <h3>{this.props.house.address}</h3>
                    <p><strong>{this.props.house.properties}</strong></p>
                    <br/>
                    <h5>{this.props.house.type}</h5>
                    <h4>{this.props.house.price}</h4>
                    <br/>
                    <p>{this.props.house.description}</p>
                </div>
                <div className="col-md-4 agent">
                    Agent List
                    {agents}
                </div>
            </div>
        );
    }
}

export default HouseDetail;
