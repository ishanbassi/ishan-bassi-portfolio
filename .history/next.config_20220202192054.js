module.exports = {
    wepack:(config) => {
        config.module.rules.push(
            {
                test:/.mdx?/,
                use:['raw-loader']
            }
        )
        console.log(config)
        return config
    }
}