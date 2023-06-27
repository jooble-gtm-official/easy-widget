function getAttributeValue(babelTypes, nameAttribute, attribute) {
  if (typeof attribute === 'undefined' || attribute.value === null || attribute.value.value === '') {
    return null;
  }

  return attribute.value.value;
}

module.exports = getAttributeValue;
