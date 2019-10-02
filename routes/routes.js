const {
    criarVeiculo,
    pegueTudoVeiculo,
    pegueUmVeiculoPorId,
    pegueUmVeiculoPorAno,
    atualizarVeiculo,
    atualizarVeiculoAno,
    excluirVeiculo

  } = require('../controller/VeiculoController')
  const express = require('express')
  const router = express.Router()
  
  router.post('/veiculos', function (req, res) { criarVeiculo(req, res) })

  router.get('/veiculos', function (req, res) { pegueTudoVeiculo(req, res) })
  
  router.get('/veiculos/id/:id', function (req, res) { pegueUmVeiculoPorId(req, res, req.params.id) })
  
  router.delete('/veiculos/:id', function (req, res) { excluirVeiculo(req, res, req.params.id) })

  router.get('/veiculos/ano/:ano', function (req, res) { pegueUmVeiculoPorAno(req, res, req.params.year) })
  
  router.put('/veiculos/:id', function (req, res) { atualizarVeiculo(req, res, req.params.id) })
  
  router.patch('/veiculos/:id', function (req, res) { atualizarVeiculoAno(req, res, req.params.id) })
  
  module.exports = router