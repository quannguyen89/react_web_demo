import React from 'react/addons';
import reactMixin from 'react-mixin';
class Search extends React.Component {

    constructor() {
        super();
        this.state = {query: ''};
    }

    render() {
        return (
            <div className="search-wrapper">
                <label className="hide" htmlFor="citystatezip">Search</label>
                <input placeholder="Address, Neighborhood, or ZIP" valueLink={this.linkState('query')}
                       type="text" autcomplete="off" id="house-search"/>
                <a className="search-btn">
                    <span className="fa fa-search"></span>
                </a>
            </div>
        );
    }
}

reactMixin(Search.prototype, React.addons.LinkedStateMixin);

export default Search;
