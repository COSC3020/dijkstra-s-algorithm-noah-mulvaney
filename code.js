// COSC3020 Dijkstra's Algorithm Exercise
// Noah Mulvaney, nmulvane@uwyo.edu
// 14 Mar 2024

// Implement Dijkstra's Algorithm

// Credit: 

// Find whether a given value exists in a list -- Theta(V)
function find(list, value) {
    for (let i = 0; i < list.length; i++) 
        if (list[i] == value) return true;
    
    return false;
}


// Find the unmarked node with the lowest distance -- Theta(V^2)
function findMin(dist, marked) {
    let index;
    let min = Infinity;

    for (let i = 0; i < dist.length; i++) 
        if (!find(marked, i) && dist[i] < min) {
            index = i;
            min = dist[i];
        }

    return index;
}

// Find the shortest path to each node from the source
function dijkstra(graph, sourceNode) {
    let marked = []; // store marked nodes
    let current = 0;

    // initialize the paths
    let paths = [];
    for (let i = 0; i < graph.length; i++)
        paths.push([]);

    // initialize the distances
    let dist = [];
    for (let i = 0; i < graph.length; i++)
        dist[i] = Infinity;
    dist[sourceNode] = 0;
    
    for (let i = 0; i < graph.length; i++) {
        // update paths
        for (let j = 0; j < graph.length; j++)
            if (!find(marked, j)) paths[j].push(current); // BUG pushes nodes not used in shortest path

        // mark current node
        marked.push(current);

        // update distances
        for (let j = 0; j < graph.length; j++)
            if (graph[current][j]) dist[j] = dist[current] + graph[current][j];

        // find next node
        current = findMin(dist, marked);
    }

    return paths;
}

let graph = [[0, 5, 2, 0, 0, 0], [0, 0, 0, 2, 0, 0], [0, 1, 0, 0, 3, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 2], [0, 0, 0, 0, 0, 0]];
console.log(dijkstra(graph, 0)); // [0, 5, 2, 7, 8, 10]     [[0], [0, 1], [0, 2], [0, 1, 3], [0, 2, 4], [0, 2, 4, 5]]