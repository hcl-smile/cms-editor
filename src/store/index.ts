import { action, observable } from 'mobx'

class PageStore { 
    @observable page = { type: 'page', body: [] }
    
    @action.bound
    init() { 
        return this.page
    }

    @action.bound
    appendPageBody(schema) {
        this.page.body.push(schema)

        return schema
    }
}

export default PageStore