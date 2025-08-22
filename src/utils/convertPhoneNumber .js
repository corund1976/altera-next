import parsePhoneNumber, { isValidPhoneNumber } from 'libphonenumber-js'

const convertPhoneNumber = (inp) => {
  if (isValidPhoneNumber(inp, 'RU')) {
    const phoneNumber = parsePhoneNumber(inp, 'RU')

    return phoneNumber.formatInternational()
  }
  return inp
}

export default convertPhoneNumber 