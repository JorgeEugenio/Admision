const Pregunta =require('../models/Pregunta')

async function getPregunta(req, res){
    const preguntas = await Pregunta.aggregate()
                                    .match({ _id: req.params.id })
                                    .lookup({
                                        from: "categorias",
                                        localField: "category",
                                        foreignField: "_id",
                                        as: 'detalles'
                                        })
                                    .replaceRoot({
                                        detalles: { $mergeObjects: [ { $arrayElemAt: [ "$detalles", 0 ] }, "$$ROOT" ] }  
                                    })
                                    .project({
                                        "_id":"$detalles._id",
                                        "question":"$detalles.question",
                                        "answer":"$detalles.answer",
                                        "difficulty":"$detalles.difficulty",
                                        "category":"$detalles.name",
                                    })
    res.status(200).send({preguntas})
}

async function getPreguntas(req, res){
    const preguntas = await Pregunta.aggregate()
                                    //.match({ _id: 164 })
                                    .lookup({
                                        from: "categorias",
                                        localField: "category",
                                        foreignField: "_id",
                                        as: 'detalles'
                                        })
                                    .replaceRoot({
                                        detalles: { $mergeObjects: [ { $arrayElemAt: [ "$detalles", 0 ] }, "$$ROOT" ] }  
                                    })
                                    .project({
                                        "_id":"$detalles._id",
                                        "question":"$detalles.question",
                                        "answer":"$detalles.answer",
                                        "difficulty":"$detalles.difficulty",
                                        "category":"$detalles.name",
                                    })
    res.status(200).send({preguntas})
}

async function getVista2(req, res){
        const preguntas = await Pregunta.find()
    res.status(200).send({preguntas})
}

module.exports = {
    getPregunta,
    getPreguntas,
    getVista2
}
