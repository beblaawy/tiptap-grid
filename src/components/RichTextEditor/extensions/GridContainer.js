import { Node } from 'tiptap'
import { wrappingInputRule } from 'tiptap-commands'

export default class GridContainer extends Node {

  get name() {
    return 'grid_container'
  }

  get schema() {
    return {
      group: 'block',
      content: 'grid_page+',
      toDOM: () => {
        return ['div', {
          'data-type': this.name,
          class: 'grid-container'
        }, 0];
      },
      parseDOM: [{
        tag: "[data-type=\"".concat(this.name, "\"]")
      }]
    }
  }

  inputRules({ type }) {
    return [
      wrappingInputRule(/^\s*(\[ \])\s$/, type),
    ]
  }
}
