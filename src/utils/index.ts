function transData(config, configMap) {
    function deep(config, configMap) {
        if (config.parentId === configMap.id) {
            configMap.body.push(config)
        }

        configMap.body = configMap.body.sort((a,b) => a.sort - b.sort)
        
        if (config.body && config.body.length) {
            config.body.forEach(item => { 
                deep(item, config)
            })
         }
    }
    
    Object.values(config).forEach(item => { 
        deep(item, configMap)
    })

    return configMap
 }