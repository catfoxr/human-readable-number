module.exports = function toReadable (number) {
    let arrNumString = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
    };
    let strNumbers = String(number);

    if (number <= 20) {
        return arrNumString[number];
    }

    if (number >= 21 && number <= 99) {
        if (strNumbers[1] === '0') {
            return arrNumString[strNumbers[0] + '0'];
        }
        return arrNumString[strNumbers[0] + '0'] + ' ' + arrNumString[strNumbers[1]];
    }

    if (strNumbers.length === 3) {
        let nextTwoNumber = strNumbers.slice(1);
        if (nextTwoNumber[0] === '0' && nextTwoNumber[1] === '0') {
            return arrNumString[strNumbers[0]] + ' hundred';
        }
        if (nextTwoNumber <= 20) {
            if (nextTwoNumber[0] === '0') {
                return arrNumString[strNumbers[0]] + ' hundred ' + arrNumString[nextTwoNumber[1]];
            }
            return arrNumString[strNumbers[0]] + ' hundred ' + arrNumString[nextTwoNumber];
        }
        if (nextTwoNumber >= 21 && nextTwoNumber <= 99) {
            if (nextTwoNumber[1] === '0') {
                return arrNumString[strNumbers[0]] + ' hundred ' + arrNumString[nextTwoNumber[0] + '0'];
            }
            return arrNumString[strNumbers[0]] + ' hundred ' + arrNumString[nextTwoNumber[0] + '0'] + ' ' + arrNumString[nextTwoNumber[1]];
        }
    }
}
