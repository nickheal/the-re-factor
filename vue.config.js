module.exports = {
    lintOnSave: false,
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.output.publicPath = 'https://nickheal.github.io/the-re-factor/';
        }
    }
};
