function depthFirstSearch(rootNode, vertices, edges){
    let stack = []
    stack.push(rootNode)
    let visitedVertices = [rootNode]

    while(!!stack.length){
        let visited = stack.pop()
        if (!visited.discovered){
            visited.discovered = true

            findAdjacent(visited.name, vertices, edges).forEach(node => {
                visitedVertices.push(node)
                stack.push(node)
            })
        }
    }
    return visitedVertices
}


function findAdjacent(nodeName, vertices, edges){
    return edges.filter(edge => {
        return edge.includes(nodeName)
    }).map(edge => {
        return edge.filter( node => {
            return (node !== nodeName)
        })[0]
    }).map(name => {
        return findNode(name, vertices)
    }).filter(node => {
        return !node.discovered
    })
}

// helper func
function findNode(nodeName, vertices){
    return vertices.find(function(vertex){
      return vertex.name == nodeName
    })
  }


