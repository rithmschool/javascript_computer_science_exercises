var expect = chai.expect
var graph;

beforeEach(function(){
  graph = new Graph
})

describe("#addVertex", function(){
  it("should add a vertex to the vertices array", function(){
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    expect(graph.vertices[0]).toBe('A')
    expect(graph.vertices[1]).toBe('B')
    expect(graph.vertices[2]).toBe('C')
    expect(graph.vertices.length).toBe(3)
  });
  it("should add a key in the adjacency list with a value as an empty array", function(){
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    expect(graph.adjacencyList['A']).toEqual([])
    expect(graph.adjacencyList['B']).toEqual([])
    expect(graph.adjacencyList['C']).toEqual([])
  });
});

describe("#addEdge", function(){
  it("should add the appropriate edges to the adjacency list", function(){
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addVertex('D')
    graph.addEdge('A','B')
    graph.addEdge('A','C')
    graph.addEdge('B','D')
    graph.addEdge('C','D')
    expect(graph.vertices.length).toBe(4)
    expect(graph.adjacencyList['A']).toContain('B', 'C')
    expect(graph.adjacencyList['B']).toContain('A', 'D')
    expect(graph.adjacencyList['C']).toContain('A', 'D')
    expect(graph.adjacencyList['D']).toContain('C', 'B')
  });
});

describe("#removeEdge", function(){
  it("should remove the vertices from the adjacency list", function(){
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addVertex('D')
    graph.addEdge('A','B')
    graph.addEdge('A','C')
    graph.addEdge('B','D')
    graph.addEdge('C','D')

    graph.removeEdge('B','A')
    graph.removeEdge('C','D')
    expect(graph.vertices.length).toBe(4)
    expect(graph.adjacencyList['A']).toContain('C')
    expect(graph.adjacencyList['B']).toContain('D')
    expect(graph.adjacencyList['C']).toContain('A')
    expect(graph.adjacencyList['D']).toContain('B')
  });
});

describe("#removeVertex", function(){
  it("should remove the vertex as well as any edges", function(){
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addVertex('D')
    graph.addEdge('A','B')
    graph.addEdge('A','C')
    graph.addEdge('B','D')
    graph.addEdge('C','D')

    graph.removeVertex('C')
    graph.removeVertex('B')
    expect(graph.vertices.length).toBe(2)
    expect(graph.adjacencyList['A']).toBeDefined()
    expect(graph.adjacencyList['D']).toBeDefined()
  });
});

describe("#depthFirstSearch", function(){
  it("should return an array of the nodes searched", function(){
    graph.addVertex('S')
    graph.addVertex('P')
    graph.addVertex('U')
    graph.addVertex('X')
    graph.addVertex('Q')
    graph.addVertex('Y')
    graph.addVertex('V')
    graph.addVertex('R')
    graph.addVertex('W')
    graph.addVertex('T')

    graph.addEdge('S','P')
    graph.addEdge('S','U')

    graph.addEdge('P','X')
    graph.addEdge('U','X')

    graph.addEdge('P','Q')
    graph.addEdge('U','V')

    graph.addEdge('X','Q')
    graph.addEdge('X','Y')
    graph.addEdge('X','V')

    graph.addEdge('Q','R')
    graph.addEdge('Y','R')

    graph.addEdge('Y','W')
    graph.addEdge('V','W')

    graph.addEdge('R','T')
    graph.addEdge('W','T')

    expect(graph.depthFirstSearch('S')).toEqual(["S", "U", "V", "W", "T", "R", "Q", "Y", "X", "P"])
  });
});

describe("#breadthFirstSearch", function(){
  it("should return an array of the nodes searched", function(){
    graph.addVertex('S')
    graph.addVertex('P')
    graph.addVertex('U')
    graph.addVertex('X')
    graph.addVertex('Q')
    graph.addVertex('Y')
    graph.addVertex('V')
    graph.addVertex('R')
    graph.addVertex('W')
    graph.addVertex('T')

    graph.addEdge('S','P')
    graph.addEdge('S','U')

    graph.addEdge('P','X')
    graph.addEdge('U','X')

    graph.addEdge('P','Q')
    graph.addEdge('U','V')

    graph.addEdge('X','Q')
    graph.addEdge('X','Y')
    graph.addEdge('X','V')

    graph.addEdge('Q','R')
    graph.addEdge('Y','R')

    graph.addEdge('Y','W')
    graph.addEdge('V','W')

    graph.addEdge('R','T')
    graph.addEdge('W','T')

    expect(graph.breadthFirstSearch('S')).toEqual(["S", "P", "U", "X", "Q", "V", "Y", "R", "W", "T"])
  });
});

describe("#dijkstra", function(){
  it("should return an array of the total distance and the shortest path", function(){
    var g = new WeightedGraph
    g.addVertex('S')
    g.addVertex('P')
    g.addVertex('U')
    g.addVertex('X')
    g.addVertex('Q')
    g.addVertex('Y')
    g.addVertex('V')
    g.addVertex('R')
    g.addVertex('W')
    g.addVertex('T')

    g.addEdge('S','P', 2)
    g.addEdge('S','U', 3)

    g.addEdge('P','X', 4)
    g.addEdge('U','X', 1)

    g.addEdge('P','Q', 5)
    g.addEdge('U','V', 3)

    g.addEdge('X','Q', 7)
    g.addEdge('X','Y', 6)
    g.addEdge('X','V', 8)

    g.addEdge('Q','R', 2)
    g.addEdge('Y','R', 1)

    g.addEdge('Y','W', 3)
    g.addEdge('V','W', 4)

    g.addEdge('R','T', 6)
    g.addEdge('W','T', 7)

    expect(g.Dijkstra('S','T')[0]).toBe(15)
    expect(g.Dijkstra('S','T')[1]).toEqual(['S','P','Q','R','T'])
  });
});

describe("#aStar", function(){
  xit("", function(){

  });
});
