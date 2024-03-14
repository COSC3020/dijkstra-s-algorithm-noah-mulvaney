// COSC3020 Dijkstra's Algorithm Exercise
// Noah Mulvaney, nmulvane@uwyo.edu
// 14 Mar 2024

// Automated random testing

// Boilerplate
const fs = require('fs');
const jsc = require('jsverify');
eval(fs.readFileSync('code.js')+'');

const test = function () {
    // Contrived unit test
    let graph1 = [[0, 5, 2, 0, 0, 0], [0, 0, 0, 2, 0, 0], [0, 1, 0, 0, 3, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 2], [0, 0, 0, 0, 0, 0]];
    if (JSON.stringify(dijkstra(graph1, 0)) != JSON.stringify([[0], [0, 2, 1], [0, 2], [0, 2, 1, 3], [0, 2, 4], [0, 2, 4, 5]])) return false;

    // Generate random graph
    let numV = 2 + Math.floor(Math.random() * 11);
    let graph2 = [];
    for (let i = 0; i < numV; i++) {
        let row = [];
        for (let j = 0; j < numV; j++) {
            if (Math.random() < 0.7) row[j] = 0;
            else row[j] = 1 + Math.floor(Math.random() * 7);
        }
        graph2.push(row);
    }
    for (let i = 0; i < numV; i++)
        graph2[i][i] = 0;

    // Test Dijkstra's with random graph
    let source = Math.floor(Math.random() * numV);
    let paths = dijkstra(graph2, source);
    for (let i = 0; i < numV; i++) {
        let last = paths[i].length - 1;
        if (paths[i][0] != source) return false;
        if (paths[i][last] != i) return false;
    }

    return true;
    };


// Run test
jsc.assert(test, { tests: 10 });
