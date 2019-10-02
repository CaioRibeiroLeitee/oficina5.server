const { Veiculo } = require('../app/models')
const { validadorVeiculo } = require('../helpers/validador')
const códigodestatus = require('../helpers/status')
const retornaMensagem = require('../helpers/retorna')
const mysql = require('mysql')
const configMysql = require('../config/database')

const con = mysql.createConnection({ configMysql })

class VeiculoController {
  criarVeiculo (req, res) {
    const validador = validadorVeiculo(req.body)

    if (validador !== '') {
      return res.status(códigodestatuss.BAD_REQUEST).json({ menssagem: validador })
    }

    Veiculo.create({
      veiculo: req.body.veiculo,
      marca: req.body.marca,
      ano: req.body.ano,
      descrição: req.body.descrição,
      vendido: req.body.vendido
    })
      .then(function () {
        return res.status(200).json({ menssagem: 'veiculo ' + retornaMensagem.CRIADO })
      })
      .catch(function () {
        return res.status(400).json({ menssagem: retornaMensagem.NÃO_CRIADO + ' veiculo' })
      })
  }

  pegueTudoVeiculo (req, res) {
    Veiculo.findAll()
      .then(function (veiculos) {
        return res.status(200).json(veiculos)
      })
      .catch(function () {
        return res.status(400).json({ menssagem:  retornaMensagem.NÃO_E_POSSIVEL_RETORNA + ' veiculos' })
      })
  }

  pegueUmVeiculoPorId (req, res, id) {
    Veiculo.findOne({ where: { id: id } })
      .then(function (veiculo) {
        if (veiculo === null) {
          return res.status(400).json({ menssagem: retornaMensagem.NÂO_EXISTE + ' veiculo' })
        }
        return res.status(200).json(veiculo)
      })
      .catch(function () {
        return res.status(400).json({ menssagem: retornaMensagem.NÂO_E_POSSIVEL_RETORNA + ' veiculo' })
      })
  }

  pegueUmVeiculoPorAno (req, res, ano) {
    Veiculo.findAll({ where: { ano: ano } })
      .then(function (vehicles) {
        return res.status(200).json(veiculos)
      })
      .catch(function () {
        return res.status(400).json({ menssagem: retornaMensagem.NÃO_E_POSSIVEL_RETORNA + ' qualquer veículo' })
      })
  }
  excluirVeiculo (req, res, id) {
    Veiculo.findOne({ where: { id: id } })
      .then(function (vehicle) {
        if (vehicle === null) {
          return res.status(400).json({ menssagem: retornaMensagem.NÃO_EXISTE + ' veiculo' })
        }

        Vehicle.destroy({ where: { id: id } })
          .then(function () {
            return res.status(200).json({ menssagem: 'Veiculo ' + retornaMensagem.EXCLUIDO })
          })
          .catch(function () {
            return res.status(400).json({ menssagem: retornaMensagem.NÃO_EXCLUIDO + 'este veículo' })
          })
      })
      .catch(function () {
        return res.status(400).json({ menssagem: retornaMensagem.NÃO_E_POSSIVEL_RETORNA + ' veiculo' })
      })
  
  }

  Atualizarveiculo (req, res, id) {
    Veiculo.findOne({ where: { id: id } })
      .then(function (veiculo) {
        if (veiculo === null) {
          return res.status(400).json({ menssagem: retornaMensagem.NÃO_EXCLUIDO + ' veiculo' })
        }

        Atualizar.veiculo({
          veiculo: req.body.veiculo,
          marca: req.body.marca,
          ano: req.body.ano,
          descrição: req.body.descrição,
          vendido: req.body.vendido
        }, { where: { id: id } })
          .then(function () {
            return res.status(200).json({ menssagem: 'veiculo ' + retornaMensagem.ATUALIZADO })
          })
          .catch(function () {
            return res.status(400).json({ menssagem: retornaMensagem.NÂO_ATUALIZADO + ' veiculo' })
          })
      })
      .catch(function () {
        return res.status(400).json({ menssagem: retornaMensagem.NÃO_E_POSSIVEL_RETORNA + ' veiculo' })
      })
  }

  atualizarVeiculoAno (req, res, id) {
    atualizar.veiculo({
      ano: req.body.ano
    }, { where: { id: id } })
      .then(function () {
        return res.status(200).json({ menssagem: 'veiculo ano ' +retornaMensagem.ATUALIZADO })
      })
      .catch(function () {
        return res.status(400).json({ menssagem: retornaMensagem.NÃO_ATUALIZADO + ' veiculo' })
      })
  }
}

module.exports = new VeiculoController()
