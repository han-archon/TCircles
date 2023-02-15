/**
 * API Return Message
 * @param data
 * @param message
 * @param successCode
 * @param errCode
 * @returns {{data: string, errorCode, message, successCode}}
 */
const returnMessage = (data = "", message, successCode, errCode) => {
    return ({data: data, message: message, successCode : successCode, errorCode : errCode });
}

module.exports = {
  returnMessage
};