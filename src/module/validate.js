const length = (expectedLength) => {
    return (value) => {
        return value.length === expectedLength;
    };
};

const regex = (regexPattern) => {
    return (value) => {
        return regexPattern.test(value);
    };
};

module.exports = {
    length,
    regex,
};
