module.exports = (sequilize, Datatypes) =>{
    const Veiculo = sequilize.define('Veiculo', {
        veiculo: Datatypes.STRING,
        ano: Datatypes.INTEGER,
        marca: Datatypes.STRING,
        vendido: Datatypes.BOOLEAN,
        descricão: Datatypes.TEXT
    })
    return Veiculo
}