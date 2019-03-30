const args = process.argv.slice(2)

function argv(arg) {
    var index =args.indexOf('--'+ arg)

    if (index !== -1 && args[index +1] !== undefined) {
        return args[index +1]
    }else {
        return null
    }
}

function validateArgs(args) {
    var validate = false

    args.forEach(function(args) {
        if(!argv(args)) {
            validate = true
        }
    })
    return validate
}

module.exports = {
    get: argv,
    validate: validateArgs
}