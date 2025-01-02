// SINGLE PAGE APPLICATION

// First step ==> make the html templates visible

class ProjectInput {
    templateElement: HTMLTemplateElement
    hostElement: HTMLDivElement
    element: HTMLFormElement

    constructor() {
        this.templateElement = document.getElementById('project-input') as HTMLTemplateElement
        this.hostElement = document.getElementById('app') as HTMLDivElement

        // Automatically render the form
        const importedNode = document.importNode(this.templateElement.content, true)
        this.element = importedNode.firstElementChild as HTMLFormElement
        this.attach()
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element)
    }
}

const prjInput = new ProjectInput()