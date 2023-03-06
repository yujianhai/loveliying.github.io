const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
<<<<<<< HEAD
  transpileDependencies: true,
  devServer:{
    overlay:{
        warning:false,
        errors:false
    }
  }
=======
    lintOnSave:false,
    publicPath: './',
  transpileDependencies: true
>>>>>>> f8b8886670e9124e60f787afde1aace06a60d04c
})
