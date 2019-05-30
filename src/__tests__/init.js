import React from 'react';
import ReactDOM from 'react-dom';
// import Enzyme, { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16'
import Demo from '../Demo';

// Enzyme.configure( {adapter: new Adapter() } );

describe('React tests.', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Demo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //
  // it('loads db into props', async () => {
  //   const WrappedComponent = withReactLowdb(App);
  //   const wrapper = shallow(<WrappedComponent/>);
  //
  //   expect(Object.keys(wrapper.props()).includes('db')).toBe(true);
  // });
});
