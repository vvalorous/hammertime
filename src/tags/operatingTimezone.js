const caseInvariantStringEquals = require('../utils/caseInvariantStringEquals');
const getHammertimeTags = require('./getHammerTimeTags');

/**
 * Returns true when the tag is a 'operatingTimezone' tag and has a value
 * specified where in that the current UTC date is between the specified dates.
 * @param {Array<{Key: string, Value: string}>} tags
 * @returns {number}
 */
module.exports = tags => {
  const timezoneTags = getHammertimeTags(tags).filter(tag => caseInvariantStringEquals(tag.Key, 'hammertime:operatingTimezone'));

  if (timezoneTags.length === 0 || timezoneTags.length > 1) {
    console.log('No timezone tag found or multiple timezone tags found. Defaulting to +10');
    return 10;
  }

  return parseInt(timezoneTags[0].Value, 10);
};