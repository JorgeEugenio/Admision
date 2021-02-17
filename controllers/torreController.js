const Torre =require('../models/Torre')

async function addTorre (req,res){
    try {
        const {
            TipoTorre,
            nombreTorre ,
            descripcionTorre ,
            direccionTorre: {
                departamento ,
                provincia ,
                distrito ,
                programa ,
                mzlt ,
            },
            statusTorre 
        } = req.body

        const torre = Torre({
            TipoTorre,
            nombreTorre,
            descripcionTorre,
            direccionTorre: {
                departamento,
                provincia,
                distrito,
                programa,
                mzlt,
            },
            statusTorre
        })
        await torre.save()
        res.status(201).send(torre)
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}
async function getTorres(req, res){
    const torres = await Torre.find()
    //console.log(torres);
    res.status(200).send(torres)
    }
async function updateTorre(req,res){
    await Torre.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    status: 'Torre Updated'
  });
}

async function deleteTorre(req,res){
    await Torre.findByIdAndRemove(req.params.id)    
res.json({
    status: 'cliente deleted!'
})
}

async function getTorre(req,res){
    const torre = await Torre.findOne({_id: req.params.id});
    //console.log(torre);
    res.json(torre);
}

module.exports = {
    addTorre,
    getTorres,
    updateTorre,
    deleteTorre,
    getTorre
}