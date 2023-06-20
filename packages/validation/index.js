const validators = {
    isLongerThan: (targ, inp) => inp.length > targ,
    hasNums: (inp) => /[0-9]./g.test(inp),
}

module.exports = validators