const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    overlay:{
        warning:false,
        errors:false
    }
  }
})
