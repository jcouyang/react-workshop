var React = require('react'),
{AppBar, AppCanvas, IconButton, Input} = require('material-ui'),
NewsList = require('./news-list')

var ReactWorkshop = React.createClass({

  render: function() {
    return (
      <div>
       <AppCanvas predefinedLayout={1}>
           <AppBar className="mui-dark-theme" zDepth={0} title="React Hacker News">
             <Input type='search'
                    onChange={this._handleSearch}
                    name="query"
                    placeholder="Search"
                    className="search"/>
           </AppBar>
           <div className="mui-app-content-canvas">
             <NewsList/>
           </div>
       </AppCanvas>
      </div>
    );
  },
  _handleSearch: function(){
     //filtering new while query
  }
});




var injectTapEventPlugin = require("react-tap-event-plugin");

injectTapEventPlugin();

React.render(
	<ReactWorkshop/>, document.querySelector('#react-workshop')
)
