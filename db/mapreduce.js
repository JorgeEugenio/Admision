const o = {};
// You can also define `map()` and `reduce()` as strings if your
// linter complains about `emit()` not being defined
o.map = 'function () { emit(this.nombreSector, 1) }';
o.reduce = 'function (k, vals) { return vals.length }';
o.out = { replace: 'createdCollectionNameForResults' }
o.verbose = true;

User.mapReduce(o, function (err, model, stats) {
  console.log('map reduce took %d ms', stats.processtime)
  model.find().where('value').gt(10).exec(function (err, docs) {
    console.log(docs);
  });
})

// `mapReduce()` returns a promise. However, ES6 promises can only
// resolve to exactly one value,
o.resolveToObject = true;
const promise = User.mapReduce(o);
promise.then(function (res) {
  const model = res.model;
  const stats = res.stats;
  console.log('map reduce took %d ms', stats.processtime)
  return model.find().where('value').gt(10).exec();
}).then(function (docs) {
   console.log(docs);
}).then(null, handleError).end()