const React = require('react');
const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
const { shallow } = require('enzyme');
const Component = require('../components/Component');

const { expect } = chai;

chai.use(chaiEnzyme());

describe('defaultProps', () => {
  it('Should change defaultProps values', () => {
    const Test = () => <>
      <Component />
    </>;

    const wrapper = shallow(<Test/>);

    expect(wrapper.html()).to.equal('<div class="career-test-en-frame1426"><img alt="arrow-career-test" src="/easy-widget/client/arrow-career-test.svg" class="career-test-en-arrowrightup" int="1" string="string" empty="" object="[object Object]" array=""/></div>');
  });
});
