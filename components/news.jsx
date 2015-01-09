var React = require('react'),
{Paper} = require('material-ui')
var dummynews = {
  id: 1,
  title: 'dummy news title',
  url: 'http://dummy.news.url',
  text: 'dummy text',
  time: '2015-01-08'
}
var News = React.createClass({
  getInitialState:function(){
    return {
      news:{},
      loading: true
    }
  },
  componentDidMount: function(){
    setTimeout(()=>this.setState({loading: false, news: dummynews}),
               300)
  },
  render: function(){
    return (
      <div className="news-item">
        <a href={this.state.news.url}>
          <Paper zDepth={0}>
            <time>{this.state.news.time}</time>
            <h2>{this.state.news.title}</h2>
            <p>{this.state.news.text}</p>
          </Paper>
        </a>
      </div>
    )
  }
})

module.exports = News;
