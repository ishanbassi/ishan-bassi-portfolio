module.exports = {
    wepack:(config,options) => {
        config.module.rules.push(
            {
                test:/.mdx?/,
                use:['raw-loader']
            }
        )
        return config
    }
}