const React = require('react');

const Component = (props) => <>
  <div className="career-test-en-frame1426">
    <img
      alt="arrow-career-test"
      src={props.image_src}
      className="career-test-en-arrowrightup"
      int={props.int}
      string={props.string}
      bool={props.bool}
      null={props.null}
      undefined={props.undefined}
      empty={props.empty}
      object={props.object}
      array={props.array}
      func={props.func}
    />
  </div>
</>;

Component.defaultProps = {
  image_src: '/arrow-career-test.svg',
  int: 1,
  string: 'string',
  bool: true,
  null: null,
  undefined: undefined,
  empty: '',
  object: {},
  array: [],
  func: () => {},
};

module.exports = Component;
