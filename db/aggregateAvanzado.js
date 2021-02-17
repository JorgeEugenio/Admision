db.contratodetalles.aggregate(
    [
    {$project:{
        _id:1,
        "statusContratoDetalle":1,
        "codigoContrato": 1,
        "serviciosContratados":1,
        "createdAt": {$concat: [
                         $substr :["$createdAt", 0,10],
                         '-',
                         $substr :["$createdAt", 11,5]
                        ]
            
            },
        "updatedAt": {
            $substr :["$updatedAt", 0,10]
            }
        }
db.boletadetalles.aggregate(
    [{$match: {"idCliente": ObjectId("5fc046528c26f319de66ac24")}},
    {$project:{
                    _id:1,
                    "statusContratoDetalle":1,
                    "codigoContrato": 1,
                    "fechaAnio":1,
                    "fechaMes":1,
                    "serviciosContratados": {$sum : "$serviciosContratados.costoServicio"},
                    "createdAt": { $concat : [{$substr :["$createdAt",0 ,10]},":",{$substr :["$createdAt", 11,5]}]},
                    "updatedAt": { $concat : [{$substr :["$updatedAt",0 ,10]},":",{$substr :["$updatedAt", 11,5]}]}
                    }
    }
    ])

db.boletadetalles.aggregate(
    [{$match: {"idCliente": ObjectId("5fc046528c26f319de66ac24")}},
    {$project:{
                    _id:1,
                    "statusContratoDetalle":1,
                    "codigoContrato": 1,
                    "serviciosContratados":1
                    
                    "createdAt": { $concat : [{$substr :["$createdAt",0 ,10]},":",{$substr :["$createdAt", 11,5]}]},
                    "updatedAt": { $concat : [{$substr :["$updatedAt",0 ,10]},":",{$substr :["$updatedAt", 11,5]}]}
                    }
    }
    ]
    )
    GeneraNuevoCodigoContrato(){
        const fecha = (new Date())
        const anio = new Date(fecha).getUTCFullYear()
        const mes = (new Date(fecha).getMonth() < 9 ? '0'+(new Date(fecha).getMonth()+1): new Date(fecha).getMonth()+1) 
        const dia = (new Date(fecha).getUTCDate() < 9? '0'+(new Date(fecha).getUTCDate()): new Date(fecha).getUTCDate())
        const hora = (new Date(fecha).getHours() < 9? '0'+(new Date(fecha).getHours()): new Date(fecha).getHours())
        const minuto = new Date(fecha).getMinutes()
        const segundo = (new Date(fecha).getUTCSeconds() < 10? '0'+(new Date(fecha).getUTCSeconds()): new Date(fecha).getUTCSeconds())

        return  anio +''+ mes +''+ dia + '-' + hora +''+ minuto + '' + segundo;