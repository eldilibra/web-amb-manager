//temporary validator until we use
//some robust tool like orderly
module.exports = function check_not_set (optionsObj, callback) {
    for (option in optionsObj) {
        if (optionsObj[option] === '**NOT SET**') {
            throw new Error('The ' + option + ' parameter was not set');
            return;
        }
    }
    callback();
};
