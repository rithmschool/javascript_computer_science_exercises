function Graph(){
    this.verticies = [];
    this.adjacencyList = {};
}

Graph.prototype.addVertex = function(vertex) {
  this.verticies.push(vertex);

  this.adjacencyList[vertex] = [];
};

Graph.prototype.addEdge = function(vertex1, vertex2) {
  this.adjacencyList[vertex1].push(vertex2);
  this.adjacencyList[vertex2].push(vertex1);
};

Graph.prototype.removeVertex = function(vertex) {
  var index = this.verticies.indexOf(vertex);
  if(index > -1) this.verticies.splice(index, 1);

  while(this.adjacencyList[vertex].length) {
    var adjacentVertex = this.adjacencyList[vertex].pop();
    this.removeEdge(adjacentVertex, vertex);
  }
};

Graph.prototype.removeEdge = function(vertex1, vertex2) {
  var index1 = this.adjacencyList[vertex1] ? this.adjacencyList[vertex1].indexOf(vertex2) : -1;
  var index2 = this.adjacencyList[vertex2] ? this.adjacencyList[vertex2].indexOf(vertex1) : -1;
  if(index1 > - 1) this.adjacencyList[vertex1].splice(index1, 1);
  if(index2 > - 1) this.adjacencyList[vertex2].splice(index2, 1);
};

Graph.prototype.breadthFirstSearch = function(start){
    // Create an empty queue
    var queue = [start];
    var result = [];
    var visited = {};
    var currentVertex;
    //Set the starting vertex to visited
    visited[start] = true;

    //While there is still remaining vertexes in queue
    while (currentVertex = queue.shift()) {
       result.push(currentVertex);

       for(var i = 0; i < this.adjacencyList[currentVertex].length; i++){
         var val = this.adjacencyList[currentVertex][i]
          if(!visited[val]){
            visited[val] = true
            queue.push(this.adjacencyList[currentVertex][i])
          }
       }
    }
    return result
}

Graph.prototype.depthFirstSearch = function(start){
    // Create an empty stack
    var stack = [start]
    var result = [];
    var visited = {};
    var currentVertex;

    //Set the starting vertex to visited
    visited[start] = true;

    //While there is still remaining vertexes in stack
    while (stack.length) {
       currentVertex = stack.pop();
       result.push(currentVertex);

       for(var i = 0; i < this.adjacencyList[currentVertex].length; i++){
         var val = this.adjacencyList[currentVertex][i]
          if(!visited[val]){
            visited[val] = true
            stack.push(this.adjacencyList[currentVertex][i])
          }
       }
    }
    return result
}

function WeightedGraph(){
    Graph.apply(this,arguments)
}

WeightedGraph.prototype = Object.create(Graph.prototype)

WeightedGraph.prototype.addEdge = function(vertex1, vertex2, weight) {
  this.adjacencyList[vertex1].push({node:vertex2, weight});
  this.adjacencyList[vertex2].push({node:vertex1, weight});
};

WeightedGraph.prototype.Dijkstra = function(nodeA, nodeB) {
  var dist = {}, unvisited = {}, min, tempDist, current, previous = {};

  for (let node in this.adjacencyList) {
    unvisited[node] = true;
    previous[node] = undefined;
    node === nodeA ? dist[node] = 0 : dist[node] = Infinity;
  }

  while(unvisited[nodeB]) {
    min = Infinity;
    current = Object.keys(unvisited).reduce(function(acc, node) {
      if (dist[node] < min) {
        acc = node;
        min = dist[node];
      }
      return acc;
    }, undefined);

    delete unvisited[current];

    for (let val of this.adjacencyList[current]) {
      if (unvisited[val.node]) {
        tempDist = dist[current] + this.adjacencyList[current][this.adjacencyList[current].indexOf(val)].weight
        if (tempDist < dist[val.node]) {
          previous[val.node] = current
          dist[val.node] = tempDist;
        }
      }
    }
  }

  function displayPath(previousPaths, node){
    var paths = [node];
    while(previousPaths[node]){
      paths.unshift(previousPaths[node])
      node = previousPaths[node]
    }
    return paths;
  }

  var path = displayPath(previous, nodeB)

  return [dist[nodeB], path];
};