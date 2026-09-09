class ComponentNode {
    constructor(componentName) {
        this.componentName = componentName;
        this.children = [];
    }
    addChild(childNode) {
        this.children.push(childNode)
    }
    renderStructure(level = 0) {
        const indent = " ".repeat(level * 4)
        console.log(`${indent}-> ${this.componentName}`);
        this.children.forEach(child => child.renderStructure(level + 1))
    }
}

// main Root Node
const appRoot = new ComponentNode('App (Root)');

// Parent Nodes
const header = new ComponentNode('Header');
const mainContent = new ComponentNode('MainContent');

// Leaf Nodes
const logo = new ComponentNode('LogoImage');
const loginBtn = new ComponentNode('LoginButton');
const jobList = new ComponentNode('JobListView');

// Tree Nesting
header.addChild(logo);
header.addChild(loginBtn);
mainContent.addChild(jobList);

appRoot.addChild(header);
appRoot.addChild(mainContent);
// tree rendering
appRoot.renderStructure();