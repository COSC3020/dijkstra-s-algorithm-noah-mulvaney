// COSC3020 Dijkstra's Algorithm Exercise
// Noah Mulvaney, nmulvane@uwyo.edu
// 20 Mar 2024

// Implement Dijkstra's Algorithm

// Credit: Online resources
//      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

// Find whether a given value exists in a list
function find(list, value) {
    for (let i = 0; i < list.length; i++) 
        if (list[i] == value) return true;
    return false;
}


// Find the unmarked node with the lowest distance
function findMin(dist, unmarked) {
    let index;
    let min = Infinity;
    for (let i = 0; i < dist.length; i++) 
        if (find(unmarked, i) && dist[i] < min) {
            index = i;
            min = dist[i];
        }
    return index;
}

// Flatten nested arrays
function flatten(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) 
        result.push(arr[i].flat(Infinity));
    return result;
}

// Find the shortest path to each node from the source
function dijkstra(graph, sourceNode) {
    let unmarked = []; // store unmarked nodes
    let current = 0;

    // initialize the paths and distances
    let paths = [];
    let dist = [];
    for (let i = 0; i < graph.length; i++) {
        unmarked.push(i);
        paths.push([]);
        dist[i] = Infinity;
    }
    paths[sourceNode] = [sourceNode];
    dist[sourceNode] = 0;
    
    for (let i = 0; i < graph.length && current != undefined; i++) {
        // mark current node
        unmarked.splice(unmarked.indexOf(current), 1);

        // update distances
        for (let j = 0; j < graph.length; j++)
            if (graph[current][j] && dist[j] > dist[current] + graph[current][j]) {
                dist[j] = dist[current] + graph[current][j];
                paths[j] = [paths[current], j];
            }
        
        // find next node
        current = findMin(dist, unmarked);
    }

    return flatten(paths);
}
