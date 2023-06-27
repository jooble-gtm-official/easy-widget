const React = require('react');
const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
const { shallow } = require('enzyme');

const { expect } = chai;

chai.use(chaiEnzyme());

describe('img', () => {
  it('Should change img src values', () => {
    const Component = () => <>
      <div className="career-test-en-frame1426">
          <img
            alt="arrow-career-test"
            src="/arrow-career-test.svg"
            className="career-test-en-arrowrightup"
          />
      </div>
    </>;

    const wrapper = shallow(<Component/>);

    expect(wrapper.html()).to.equal('<div class="career-test-en-frame1426"><img alt="arrow-career-test" src="/easy-widget/client/arrow-career-test.svg" class="career-test-en-arrowrightup"/></div>');
  });

  it('Should not change img src values when value is null or undefined', () => {
    const Component = () => <>
      <div className="career-test-en-frame1426">
        <img
          alt="arrow-career-test"
          className="career-test-en-arrowrightup"
        />
      </div>
    </>;

    const wrapper = shallow(<Component/>);

    expect(wrapper.html()).to.equal('<div class="career-test-en-frame1426"><img alt="arrow-career-test" class="career-test-en-arrowrightup"/></div>');
  });

  it('Should not change img src values when value is empty', () => {
    const Component = () => <>
      <div className="career-test-en-frame1426">
        <img
          alt="arrow-career-test"
          src=""
          className="career-test-en-arrowrightup"
        />
      </div>
    </>;

    const wrapper = shallow(<Component/>);

    expect(wrapper.html()).to.equal('<div class="career-test-en-frame1426"><img alt="arrow-career-test" src="" class="career-test-en-arrowrightup"/></div>');
  });

  it('Should not change img src values when the value already has a prefix', () => {
    const Component = () => <>
      <div className="career-test-en-frame1426">
        <img
          alt="arrow-career-test"
          src="/easy-widget/client/arrow-career-test.svg"
          className="career-test-en-arrowrightup"
        />
      </div>
    </>;

    const wrapper = shallow(<Component/>);

    expect(wrapper.html()).to.equal('<div class="career-test-en-frame1426"><img alt="arrow-career-test" src="/easy-widget/client/arrow-career-test.svg" class="career-test-en-arrowrightup"/></div>');
  });
});
