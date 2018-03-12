var lodash = require('lodash')
var reportResults = require('./report-results')
var now = require('./now')

var items = lodash.range(10000)
var maxCount = 100

module.exports = {
  mount: function (example, object) {
    if (object > 0) {
      items = lodash.fromPairs(lodash.range(object).map(function (item) {
        return [item, item]
      }))
    }

    var count = 0
    var times = []

    document.getElementById('results').textContent = 'Running benchmark. This may take a minute...'

    function runExample () {
      var startTime = now()
      example(items, function () {
        var totalTime = Math.ceil(now() - startTime)
        times.push(totalTime)
        count += 1
        if (count < maxCount) {
          document.getElementById('root').innerHTML = ''
          setTimeout(runExample, 0)
        } else {
          reportResults(times)
        }
      })
    }
    setTimeout(runExample, 0)
  },
  update: function (example, mutable, random, object) {
    if (object > 0) {
      items = lodash.fromPairs(lodash.range(object).map(function (item) {
        return [item, item]
      }))
    }

    var count = 0
    var times = []
    var startTime

    document.getElementById('results').textContent = 'Running benchmark. This may take a minute...'

    function doUpdate (updater) {
      setTimeout(function () {
        if (mutable) {
          if (object > 0) {
            items = lodash.fromPairs(lodash.range(object).map(function (item) {
              return [item, item]
            }))
          } else {
            items = random ? lodash.shuffle(lodash.range(10000)) : lodash.range(10000)
          }
        }
        startTime = now()
        updater(items)
      }, 0)
    }

    function onMounted (updater) {
      doUpdate(updater)
    }

    function onUpdated (updater) {
      var totalTime = Math.ceil(now() - startTime)
      times.push(totalTime)
      count += 1
      if (count < maxCount) {
        doUpdate(updater)
      } else {
        reportResults(times)
      }
    }

    setTimeout(function () {
      example(items, onMounted, onUpdated)
    }, 0)
  }
}
