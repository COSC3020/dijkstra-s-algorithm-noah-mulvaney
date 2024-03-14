// COSC3020 Dijkstra's Algorithm Exercise
// Noah Mulvaney, nmulvane@uwyo.edu
// 14 Mar 2024

// Automated random testing

// Boilerplate
const fs = require('fs');
const jsc = require('jsverify');
eval(fs.readFileSync('code.js')+'');

const test = function () {
    let graph = [[0, 5, 2, 0, 0, 0], [0, 0, 0, 2, 0, 0], [0, 1, 0, 0, 3, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 2], [0, 0, 0, 0, 0, 0]];
    if (JSON.stringify(dijkstra(graph, 0)) != JSON.stringify([[0], [0, 2, 1], [0, 2], [0, 2, 1, 3], [0, 2, 4], [0, 2, 4, 5]])) return false;

    return true;
    };


// Run test
jsc.assert(test, { tests: 1 });
