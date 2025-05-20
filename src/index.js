import timezones from '../data/timezone-data.js'

/**
 * Lookup timezone info by name from compressed timezone data.
 * @param {string} timezone - e.g., "Pacific/Niue"
 * @returns {{ countryCode: string, countryName: string, continentName: string } | null}
 */
function getTimezoneInfo(timezone) {
  const match = timezones.find(([name]) => name === timezone)
  if (!match) return null

  const [, countryCode, countryName, continentName] = match

  return {
    countryCode,
    countryName,
    continentName
  }
}

export default getTimezoneInfo
