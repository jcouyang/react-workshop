var React = require('react'),
News = require('./news.jsx');
var dummynews = [1,2,3,4];
var NewsList = React.createClass({
  getInitialState: function(){
    return {
      stories:[],
      loading: true
    }
  },
  componentDidMount: function(){
    setTimeout(()=>this.setState({loading:true, stories:dummynews}),
               300)
  },
  render: function(){
    var newslist = this.state.stories.map((id)=>{
      return <News newsId={id}/>
    })
    return (
      <div>
        {newslist}
      </div>
    )
  }
})

module.exports = NewsList;
