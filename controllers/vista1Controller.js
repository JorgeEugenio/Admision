const Pregunta =require('../models/Pregunta')

async function getVista1(req, res){
    const preguntas = await Pregunta.aggregate()
                                    .match({ _id: 164 })
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
                                    console.log(preguntas);
    res.status(200).send(preguntas)
    }

module.exports = {
    getVista1
}