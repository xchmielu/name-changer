const fs = require('fs')
const path = require('path')
const argv = require('./argv')
const sortByDate = require('./utlis').sortByDate
const newFileName = require('./utlis').newFileName

if(argv.validate(['dir','ext','format'])){
    throw new Error('Nie podano wszystkich parametrów')
}

var dir = path.join(__dirname, argv.get('dir'))

fs.readdir(dir, (err, files) => {
    if(err) {
        throw err
    }
    
    var validFiles = files.filter((files )=> {
        return path.extname(files).slice(1) === argv.get('ext')
    })    
    console.log(validFiles)

    validFiles = sortByDate(validFiles, dir)

    validFiles.forEach((file, index) => {
        try {
            fs.renameSync(path.join(dir,file),path.join(dir, newFileName(argv.get('format'),argv.get('ext'), index +1 )) )
        } catch(e){
            console.error(`Wystąpił błąd: ${e.message}`)
        }
    })

})

