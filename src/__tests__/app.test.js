import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app';

describe('<App />', () => {
  it('nothing from this page is rendered at application start', () => {
    const app = shallow(<App />);
    expect(app.find('div').exists()).toBe(true);
  });

  it('state contains count', () => {
    const app = mount(<App />);
    expect(app.state('count')).toEqual(0);
  });

  it('state contains name', () => {
    const app = mount(<App />);
    expect(app.state('name')).toEqual(null);
  });

  it('snapshot is rendered correctly', () => {
    const app = renderer
      .create(<App />)
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
