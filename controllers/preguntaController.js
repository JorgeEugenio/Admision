const Pregunta =require('../models/Pregunta')

async function addPregunta (req,res){
    try {
        const {
            name
            
            
        } = req.body

        const pregunta = Pregunta({
           name
        })
        await pregunta.save()
        res.status(201).send(pregunta)
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}
async function getPreguntas(req, res){
    const preguntas = await Pregunta.find()
    //console.log(preguntas);
    res.status(200).send(preguntas)
    }
async function updatePregunta(req,res){
    await Pregunta.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    status: 'Pregunta Updated'
  });
}

async function deletePregunta(req,res){
    await Pregunta.findByIdAndRemove(req.params.id)    
res.json({
    status: 'cliente deleted!'
})
}

async function getPregunta(req,res){
    const pregunta = await Pregunta.findOne({_id: req.params.id});
    //console.log(pregunta);
    res.json(pregunta);
}

module.exports = {
    addPregunta,
    getPreguntas,
    updatePregunta,
    deletePregunta,
    getPregunta
}