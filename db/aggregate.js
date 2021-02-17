db.torres.aggregate(
    [
        {
            $match:{
                _id: ObjectId("5fac4148fc5f78279d8f8e96")
            }
        },
        {
            $lookup:{
                from: 'sectors',
                localField:'_id',
                foreignField:'idTorre',
                as: 'cursos'
            }
        }
    ]
)
const sectores = await Sector.find({'nombreSector':'sector1'})

const sectores = await Plan.aggregate()
                            .match({nombrePlan :{$in : ['4M']}})

const sectores = await Plan.aggregate()
                            .group({_id: 1, Maxcosto:{$max: '$costo'}})
                            .group({_id: 1, Maxcosto:{$min: '$costo'}})
                            .group({_id: 1, Maxcosto:{$sum: '$costo'}})

const sectores = await Plan.aggregate()
                            .match({nombrePlan :{$in : ['4M']}})
                            .option({ allowDiskUse: true })

const sectores = await Plan.aggregate()
                            .match({nombrePlan :{$regex : /0/}})

const sectores = await Plan.aggregate()
                            .match({nombrePlan :{$regex : /789$/}})//texto que termina en 789

const sectores = await Plan.aggregate()
                            .match({nombrePlan :{$regex : /0M$/}})//texto que termina en 789
                            

const sectores = await Plan.distinct('nombrePlan')

const sectores = await Plan.where({nombrePlan :{$in : ['4M']}})

const sectores = await Plan.where({$or : [{nombrePlan: {$regex : /8M$/}}]})

const sectores = await Plan.aggregate()
                            .group({_id: "$nombrePlan", totalCosto : { $sum : "$costo"}})
 
const sectores = await Plan.aggregate()
                            .pipeline([
                                {$project : { nombrePlan: 1}},
                                { $unwind: "$nombrePlan"},
                                { $group: { _id: "$nombrePlan", count: { $sum : 1 } } }
                            ])

const sectores = await Plan.aggregate()
                            .match({ nombrePlan :'4M'})

const sectores = await Plan.aggregate()
                            .project({ nombrePlan: 1, descripcion:1, costo: 1})//0 no lo quiero1: si lo quiero

const sectores = await Sector.aggregate()
                            //.match({_id: req.params.id})
                            .lookup({
                                from: "torres",
                                localField: "idTorre",
                                foreignField: "_id",
                                as: 'inventory'
                                })
                            .pipeline()

const sectores = await Sector.aggregate()
                            .match({_id: req.params.id})
                            .lookup({
                                from: "torres",
                                localField: "idTorre",
                                foreignField: "_id",
                                as: 'inventory'
                                })
                            .project({ 
                                nombreSector: 1, 
                                descripcion:1, 
                                inventory: 1})
                            
const sectores = await Sector.aggregate()
                            .match({_id: req.params.id})
                            .lookup({
                                from: "torres",
                                localField: "idTorre",
                                foreignField: "_id",
                                as: 'inventory'
                                })
                            .project({ 
                                nombreSector: 1, 
                                descripcion:1, 
                                inventory: 1})
                            .replaceRoot({
                                x: { $concat: ['$this', '$that'] }  
                            })


                                db.sectors.aggregate(
                                    [{$lookup:{
                                        from: "torres",
                                        localField: "idTorre",
                                        foreignField: "_id",
                                        as: "torre"
                                        }},
                                    {
                                          $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$torre", 0 ] }, "$$ROOT" ] } }
                                       }
                                    ]
                                    )
[{
    "torre":{
        "_id":"5faca7d4674817b599a0851e",
        "TipoTorre":"Torre",
        "nombreTorre":"Rimac001",
        "descripcion":"sector de casa",
        "direccion":{
            "departamento":"Lima",
            "provincia":"Lima",
            "distrito":"Rimac",
            "programa":"Horacion Zevallos I etapa",
            "mzlt":"B-31"
        },
        "status":"Activo",
        "__v":0,
        "nombreSector":"sector1",
        "idTorre":"5fbc7bef4f37a02beadd303e",
    "torre":[{"_id":"5fbc7bef4f37a02beadd303e","TipoTorre":"Torre","nombreTorre":"Rimac001","descripcion":"Torre en casa de Jorge Luis","direccion":{"departamento":"Lima","provincia":"Lima","distrito":"Rimac","programa":"Horacion Zevallos I etapa","mzlt":"B-31"},"status":"Activo","__v":0}]}},{"torre":{"_id":"5facba8a674817b599a08521","TipoTorre":"Torre","nombreTorre":"Rimac001","descripcion":"alquiler de el bosque","direccion":{"departamento":"Lima","provincia":"Lima","distrito":"Rimac","programa":"Horacion Zevallos I etapa","mzlt":"B-31"},"status":"Activo","__v":0,"nombreSector":"sector2","idTorre":"5fbc7bef4f37a02beadd303e","torre":[{"_id":"5fbc7bef4f37a02beadd303e","TipoTorre":"Torre","nombreTorre":"Rimac001","descripcion":"Torre en casa de Jorge Luis","direccion":{"departamento":"Lima","provincia":"Lima","distrito":"Rimac","programa":"Horacion Zevallos I etapa","mzlt":"B-31"},"status":"Activo","__v":0}]}},{"torre":{"_id":"5fb33cf9e911ecf6919f3823","TipoTorre":"Torre","nombreTorre":"Rimac001","descripcion":"sector nuevo descripcion","direccion":{"departamento":"Lima","provincia":"Lima","distrito":"Rimac","programa":"Horacion Zevallos I etapa","mzlt":"B-31"},"status":"Activo","__v":0,"nombreSector":"sector nuevo","idTorre":"5fbc7bef4f37a02beadd303e","torre":[{"_id":"5fbc7bef4f37a02beadd303e","TipoTorre":"Torre","nombreTorre":"Rimac001","descripcion":"Torre en casa de Jorge Luis","direccion":{"departamento":"Lima","provincia":"Lima","distrito":"Rimac","programa":"Horacion Zevallos I etapa","mzlt":"B-31"},"status":"Activo","__v":0}]}},{"torre":{"_id":"5fbc7bef4f37a02beadd303e","TipoTorre":"Torre","nombreTorre":"Rimac001","descripcion":"sector nuevo descripcion","direccion":{"departamento":"Lima","provincia":"Lima","distrito":"Rimac","programa":"Horacion Zevallos I etapa","mzlt":"B-31"},"status":"Activo","__v":0,"nombreSector":"sector nuevo","idTorre":"5fbc7bef4f37a02beadd303e","torre":[{"_id":"5fbc7bef4f37a02beadd303e","TipoTorre":"Torre","nombreTorre":"Rimac001","descripcion":"Torre en casa de Jorge Luis","direccion":{"departamento":"Lima","provincia":"Lima","distrito":"Rimac","programa":"Horacion Zevallos I etapa","mzlt":"B-31"},"status":"Activo","__v":0}]}}]