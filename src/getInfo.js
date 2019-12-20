let obj = {}
const getInfo = async (stuff) => {
    const results = await stuff
    for (i = 0; i <= results.length - 1; i++) {
        obj[results[i].name] = results[i]
        
    }
    return obj

    
}

module.exports = getInfo

