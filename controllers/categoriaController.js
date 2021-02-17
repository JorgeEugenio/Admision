const Categoria =require('../models/Categoria')

async function addCategoria (req,res){
    try {
        const {
            _1,
            _2 ,
            _3 ,
            _4 ,
            _5 ,
            _6
            
            
        } = req.body

        const categoria = Categoria({
            _1,
            _2 ,
            _3 ,
            _4 ,
            _5 ,
            _6
        })
        await categoria.save()
        res.status(201).send(categoria)
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}
async function getCategorias(req, res){
    const categorias = await Categoria.find()
    //console.log(categorias);
    res.status(200).send(categorias)
    }
async function updateCategoria(req,res){
    await Categoria.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    status: 'Categoria Updated'
  });
}

async function deleteCategoria(req,res){
    await Categoria.findByIdAndRemove(req.params.id)    
res.json({
    status: 'cliente deleted!'
})
}

async function getCategoria(req,res){
    const categoria = await Categoria.findOne({_id: req.params.id});
    //console.log(categoria);
    res.json(categoria);
}

module.exports = {
    addCategoria,
    getCategorias,
    updateCategoria,
    deleteCategoria,
    getCategoria
}