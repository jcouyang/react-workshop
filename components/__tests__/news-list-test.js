jest.dontMock('../news-list');
describe('news list', function(){
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var NewsList =require('../news-list');
  var News = require('../news');
  TestUtils.mockComponent(News);
	it('render 4 news items', function(){
  	var newsList = TestUtils.renderIntoDocument(
      <NewsList/>
  	);
    jest.runAllTimers();
  	var items = TestUtils.scryRenderedComponentsWithType(newsList, News);
    expect(items.length).toEqual(4);
	});
})
