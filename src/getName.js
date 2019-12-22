
const getName = (resultados) => {
    let ShipNames = []
    const ship = resultados
     for (i = 0; i <= ship.length - 1; i++){
         ShipNames.push(ship[i].name)
    }
    return ShipNames
}

module.exports = getName

