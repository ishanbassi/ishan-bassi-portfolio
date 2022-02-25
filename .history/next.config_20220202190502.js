module.exports = {
    wepack:(config,options) => {
        config.module.rules.push(
            {
                test:/.md/,
                use:['raw-loader']
            }
        )
        return config
    }
}