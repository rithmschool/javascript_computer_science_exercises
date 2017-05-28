function Graph(){
  this.vertices = [];
  this.adjacencyList = {};
}

Graph.prototype.addVertex = function(v){
  this.vertices.push(v)
  this.adjacencyList[v] = [];
}

Graph.prototype.addEdge = function(a,b){
  if(!this.adjacencyList[a]) return;
  if(!this.adjacencyList[b]) return;
  this.adjacencyList[a].push(b);
  this.adjacencyList[b].push(a);
}

Graph.prototype.removeEdge = function(a,b){
  if(!this.adjacencyList[a]) return;
  if(!this.adjacencyList[b]) return;
  for(var i = 0; i < this.adjacencyList[a].length; i++){
    if(this.adjacencyList[a][i] === b){
      this.adjacencyList[a].splice(i,1);
      break;
    }
  }
  for(i = 0; i < this.adjacencyList[b].length; i++){
    if(this.adjacencyList[b][i] === a){
      this.adjacencyList[b].splice(i,1);
      break;
    }
  }
}

Graph.prototype.removeVertex = function(v){
  for(var i = 0; i < this.vertices.length; i++){
    if(this.vertices[i] === v){
      this.vertices.splice(i,1);
    }
  }
  for(var j = 0; j < this.adjacencyList[v].length; j++){
    var key = this.adjacencyList[v][j];
    for(var k = 0; k < this.adjacencyList[key].length; k++){
      if(this.adjacencyList[key][k] === v){
        this.adjacencyList[key].splice(k,1);
        break;
      }
    }
  }
  delete this.adjacencyList[v];
}


Graph.prototype.depthFirstSearch = function(start){
  var visited = {};
  var stack = [];
  var path = [];
  for(var i = 0; i < this.vertices.length; i++){
    visited[this.vertices[i]] = 0;
  }
  stack.push(start);
  while(stack.length !== 0){
    var next = stack.pop();
    //if not visited
    if(visited[next] === 0){
      //mark visited
      visited[next] = 1;
      //push its edges into stack
      for(var j = 0; j < this.adjacencyList[next].length; j++){
        stack.push(this.adjacencyList[next][j]);
      }
      //add to path
      path.push(next);
    }
  }
  console.log(path);
  return path;
}

Graph.prototype.breadthFirstSearch = function(start){
  var visited = {};
  var queue = [];
  var path = [];
  for(var i = 0; i < this.vertices.length; i++){
    visited[this.vertices[i]] = 0;
  }
  queue.push(start);
  while(queue.length !== 0){
    var next = queue.shift();
    //if not visited
    if(visited[next] === 0){
      //mark visited
      visited[next] = 1;
      //push its edges into queue
      for(var j = 0; j < this.adjacencyList[next].length; j++){
        queue.push(this.adjacencyList[next][j]);
      }
      //add to path
      path.push(next);
    }
  }
  console.log(path);
  return path;
}












