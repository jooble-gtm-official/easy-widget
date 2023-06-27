const getAttributes = require('./util/getAttributes');
const getAttribute = require('./util/getAttribute');
const getAttributeValue = require('./util/getAttributeValue');
const setAttributeValue = require('./util/setAttributeValue');
const attributeNames = require('./util/constants');
const { PREFIX, IMAGE_PATH_REGEXP } = require('./constants');

module.exports = function (babel) {
  const visitor = {
    JSXElement(path) {
      const { node } = path;
      const { types } = babel;
      const nodeName = node.openingElement.name.name;

      if (attributeNames.IMG !== nodeName) {
        return;
      }

      const attributes = getAttributes(node);

      const attributeWithSrc = getAttribute(types, attributes, attributeNames.SRC);

      if (attributeWithSrc) {
        const attributeValue = getAttributeValue(types, attributeNames.SRC, attributeWithSrc);

        if (typeof attributeValue !== 'string') {
          return;
        }

        if (!!attributeValue && attributeValue.startsWith(PREFIX)) {
          return;
        }

        path.replaceWith(setAttributeValue(node, attributeNames.SRC, PREFIX + attributeValue));
      }
    },
    Program: {
      enter: (path) => {
        const { node } = path;

        node.body = node.body.map((it) => {
          if (it.type !== 'ExpressionStatement' || it?.expression?.right?.properties === undefined) {
            return it;
          }

          it.expression.right.properties = it.expression.right.properties.map((property) => {
            const value = property.value.value;

            if (typeof value !== 'string') {
              return property;
            }

            if (!!value && value.startsWith(PREFIX)) {
              return property;
            }

            if (!IMAGE_PATH_REGEXP.exec(value)) {
              return property;
            }

            property.value.value = PREFIX + value;

            return property;
          });

          return it
        });

        path.replaceWith(node);
      },
    },
  };

  return {
    inherits: require('@babel/plugin-syntax-jsx').default,
    visitor,
  };
};
