import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app';
import Form from '../components/Form/Form';

describe('<Form />', () => {
  it('nothing from this page is rendered at application start', () => {
    const form = shallow(<Form />);
    expect(form.find('form').exists()).toBe(true);
    expect(form.find('input').exists()).toBe(true);
  });

  it('can change app state name on change', () => {
    const app = mount(<App />);
    const input = app.find('input');
    input.simulate('change', { target: { value: 'Jo' } });
    expect(app.state('name')).toEqual('Jo');
  });

  it('can change app state count on change', () => {
    const app = mount(<App />);
    const submit = app.find('form');
    submit.simulate('submit');
    expect(app.state('count')).toEqual(1);
  });

  it('snapshot is rendered correctly', () => {
    const form = renderer
      .create(<Form />)
      .toJSON();
    expect(form).toMatchSnapshot();
  });
});
