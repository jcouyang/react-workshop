var React = require('react'),
{AppBar, IconButton} = require('material-ui')
{AppBar, AppCanvas, IconButton} = require('material-ui'),

var ReactWorkshop = React.createClass({

  render: function() {
    return (
      <div>
       <AppCanvas predefinedLayout={1}>
           <AppBar className="mui-dark-theme" zDepth={0} title="React Hacker News">
             {//maybe something like a search bar}
           </AppBar>
           <div className="mui-app-content-canvas">
             {//your Hacker News list here. hint: you can use <Paper/> to wrap each item }
           </div>
       </AppCanvas>
      </div>
    );
  }
});




var injectTapEventPlugin = require("react-tap-event-plugin");

injectTapEventPlugin();

React.render(
	<ReactWorkshop/>, document.querySelector('#react-workshop')
)
