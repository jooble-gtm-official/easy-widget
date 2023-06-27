function setAttributeValue(node, nameAttribute, value) {
  if (typeof node.openingElement === 'undefined') {
    return node;
  }

  node.openingElement.attributes = node.openingElement.attributes.map((attribute) => {
    if (attribute.name.name !== nameAttribute || attribute.value === null || attribute.value.value === '') {
      return attribute;
    }

    attribute.value.value = value;

    return attribute;
  });

  return node;
}

module.exports = setAttributeValue;
