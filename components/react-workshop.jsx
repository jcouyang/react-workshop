var React = require('react'),
{AppBar, IconButton} = require('material-ui')

var ReactWorkshop = React.createClass({

  render: function() {
    return (
      <AppBar title="Hello React" className="mui-dark-theme">
        <IconButton icon="mui-icon-github" href="https://github.com/jcouyang/react-workshop" linkButton={true}/>
      </AppBar>
    );
  }
});

var injectTapEventPlugin = require("react-tap-event-plugin");

injectTapEventPlugin();

React.render(
	<ReactWorkshop/>, document.querySelector('#react-workshop')
)
