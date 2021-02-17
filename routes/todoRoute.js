const express = require('express')
const { addBoletaDetalle, getBoletaDetalles, updateBoletaDetalle, deleteBoletaDetalle, getBoletaDetalle, getBoletaDetallexCodigoBoleta, getBoletaDetallesxCodigoCliente, getBoletaDetallesxTodo } = require('../controllers/boletaDetalleController')
const { addTorre, getTorres, getTorre,updateTorre,deleteTorre } = require('../controllers/torreController')
const { addSector, getSectores, getSectoresDetalles, getSector,updateSector,deleteSector } = require('../controllers/sectorController')
const { addPlan, getPlanes, getPlan,updatePlan,deletePlan,getPlanDetalles } = require('../controllers/planController')
const { addCuentaPago, getCuentaPagos, getCuentaPago,updateCuentaPago,deleteCuentaPago } = require('../controllers/cuentaPagoController')
const { addContrato, getContratos, updateContrato, deleteContrato, getContrato, getContratoByCodigo, deleteContratoxCodigo} = require('../controllers/contratoController')
const { addContratoDetalle, getContratoDetalles, updateContratoDetalle, deleteContratoDetalle, getContratoDetalle, getContratoDetallePorContratoId, getContratoDetallesxCodigoCliente } = require('../controllers/contratoDetalleController')
const { addCliente, getClientes, updateCliente, deleteCliente, getCliente, getClientePorCodigo} = require('../controllers/clienteController')
const { addClienteDetalle, getClienteDetalles, updateClienteDetalle, deleteClienteDetalle, getClienteDetalle } = require('../controllers/clienteDetalleController')
const { addBoleta, getBoletas, updateBoleta, deleteBoleta, getBoleta, getBoletaxCliente, getBoletaxCodigoBoleta, updatexCodigoBoleta } = require('../controllers/boletaController')
const api = express.Router()

api.post('/boletadetalle', addBoletaDetalle)
api.get('/boletadetalle', getBoletaDetalles)
api.get('/boletadetalle/:id', getBoletaDetalle)
api.put('/boletadetalle/:id', updateBoletaDetalle)
api.delete('/boletadetalle/:id',deleteBoletaDetalle)
api.get('/boletadetallexcodigoboleta/:id', getBoletaDetallexCodigoBoleta)
api.get('/boletadetallexcodigocliente/:id', getBoletaDetallesxCodigoCliente)
api.get('/boletadetallextodo', getBoletaDetallesxTodo)



api.post('/boleta', addBoleta)
api.get('/boleta', getBoletas)
api.get('/boleta/:id', getBoleta)
api.put('/boleta/:id', updateBoleta)
api.put('/boletaxcodigoboleta/:id', updatexCodigoBoleta)
api.delete('/boleta/:id',deleteBoleta)
api.get('/boletaxcliente/:id', getBoletaxCliente)
api.get('/boletaxcodigoboleta/:id', getBoletaxCodigoBoleta)


api.post('/clientedetalle', addClienteDetalle)
api.get('/clientedetalle', getClienteDetalles)
api.get('/clientedetalle/:id', getClienteDetalle)
api.put('/clientedetalle/:id', updateClienteDetalle)
api.delete('/clientedetalle/:id',deleteClienteDetalle)


api.post('/cliente', addCliente)
api.get('/cliente', getClientes)
api.get('/cliente/:id', getCliente)
api.put('/cliente/:id', updateCliente)
api.delete('/cliente/:id',deleteCliente)
api.get('/clienteporcodigo/:id', getClientePorCodigo)


api.post('/contratodetalle', addContratoDetalle)
api.get('/contratodetalle', getContratoDetalles)
api.get('/contratodetalle/:id', getContratoDetalle)
api.put('/contratodetalle/:id', updateContratoDetalle)
api.delete('/contratodetalle/:id',deleteContratoDetalle)
api.get('/contratodetalleporcontratoid/:id', getContratoDetallePorContratoId)
api.get('/contratodetallexcodigocliente/:id', getContratoDetallesxCodigoCliente)


api.post('/contrato', addContrato)
api.get('/contrato', getContratos)
api.get('/contrato/:id', getContrato)
api.get('/contratoxcodigo/:id', getContratoByCodigo)
api.put('/contrato/:id', updateContrato)
api.delete('/contrato/:id',deleteContrato)
api.delete('/contratoxcodigo/:id',deleteContratoxCodigo)


api.post('/cuentapago', addCuentaPago)
api.get('/cuentapago', getCuentaPagos)
api.get('/cuentapago/:id', getCuentaPago)
api.put('/cuentapago/:id', updateCuentaPago)
api.delete('/cuentapago/:id',deleteCuentaPago)


api.post('/plan', addPlan)
api.get('/plan', getPlanes)
api.get('/plan/detalles', getPlanDetalles)
api.get('/plan/:id', getPlan)
api.put('/plan/:id', updatePlan)
api.delete('/plan/:id',deletePlan)


api.post('/sector', addSector)
api.get('/sector', getSectores)
api.get('/sectoresdetalles', getSectoresDetalles)
api.get('/sector/:id', getSector)
api.put('/sector/:id', updateSector)
api.delete('/sector/:id',deleteSector)


api.post('/torre', addTorre)
api.get('/torre', getTorres)
api.get('/torre/:id', getTorre)
api.put('/torre/:id', updateTorre)
api.delete('/torre/:id',deleteTorre)

module.exports = api