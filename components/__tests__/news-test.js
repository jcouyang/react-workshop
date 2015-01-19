jest.dontMock('../news');
describe('news', function(){
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var News = require('../news');
	it('render news items', function(){
  	var news = TestUtils.renderIntoDocument(
      <News/>
  	);
    jest.runAllTimers();
  	var items = TestUtils.findRenderedDOMComponentWithTag(news, 'h2');
    expect(items.getDOMNode().textContent).toEqual('dummy news title');
	});
});
