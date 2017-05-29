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
  return path;
}

function WeightedGraph(){
  this.vertices = [];
  this.adjacencyList = {};
}

WeightedGraph.prototype.addVertex = function(v){
  this.vertices.push(v)
  this.adjacencyList[v] = [];
}

WeightedGraph.prototype.addEdge = function(a,b,weight){
  if(!this.adjacencyList[a]) return;
  if(!this.adjacencyList[b]) return;
  this.adjacencyList[a].push({'from': a, 'to': b,'weight': weight});
  this.adjacencyList[b].push({'from': b, 'to': a,'weight': weight});
}

WeightedGraph.prototype.Dijkstra = function(a,b){
  var visited = {};
  var from = {};
  var dist = {};
  var pqueue = [];
  var path = [];
  var nextNode;
  //set up
  for(var i = 0; i < this.vertices.length; i++){
    visited[this.vertices[i]] = 0;
    from[this.vertices[i]] = null;
    dist[this.vertices[i]] = Number.MAX_SAFE_INTEGER;
  }
  insertPQ(pqueue, {'from': a, 'to': a, 'weight': 0})
  while(pqueue.length !== 0){
    //shift off next in PQ
    var next = pqueue.shift();

    //if not visited
    if(visited[next.to] === 0){
      //update visisted
      visited[next.to] = 1;
      //update from
      from[next.to] = next.from;
      //update dist
      dist[next.to] = next.weight;
      //loop through the edges
      for(var j = 0; j < this.adjacencyList[next.to].length; j++){
        nextNode = this.adjacencyList[next.to][j]
        //if visited do not push
        if(!visited[nextNode.to]){
          //push with updated TOTAL WEIGHT
          insertPQ(pqueue, {'from': nextNode.from, 'to': nextNode.to, 'weight': (nextNode.weight + dist[nextNode.from])});
          from[this.adjacencyList[next.to][j].to] = next.to;
        }
      }
    }
    //if found, early break from loop
    if(next.to === b){
      break;
    }
  }
  path = printPath(a, b, from, dist);

  return [dist[b], path];
}

function printPath(a,b,from,dist){
  var array = [];
  function helper(start,current,from,dist){
    if(start === current){
      array.push(current);
      return;
    }
    helper(start,from[current],from,dist);
    array.push(current);
  }
  helper(a,b,from,dist)
  return array;
}



function insertPQ(arr, node){
  if(arr.length === 0){
    arr.push(node);
    return;
  }
  for(var i = 0; i < arr.length; i++){
    if(node.weight < arr[i].weight){
      arr.splice(i,0,node);
      return;
    }
  }
  arr.push(node);
}









