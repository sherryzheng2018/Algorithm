// O(v + m) Time | O(v) Space 
class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    // O(v + e) time - where v is the number of vertices in the graph 
    // m is the edges connecting the vertices 
    // O(v) space
    depthFirstSearch(array) {
        array.push(this.name);
        for (const child of this.children) {
            child.depthFirstSearch(array);
        }
        return array;
    }
}
  