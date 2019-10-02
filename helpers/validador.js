class Validadores {
    validadorVeiculo (req) {
      const validador = req.body
  
      if (validador.veiculo === '') {
        return 'Veículo é necessário'
      }
  
      if (validador.marca === '') {
        return 'Marca é necessária'
      }
  
      if (validador.ano === undefined) {
        return 'Ano é necessário'
      }
  
      if (validador.descrição === '') {
        return 'Descrição é necessária'
      }
  
      if (validador.vendido === undefined) {
        return 'Vendido é necessário'
      }
  
      return ''
    }
  }
  
  module.exports = new Validadores()
  