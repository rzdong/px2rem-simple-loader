# px2rem-simple-loader
基于webpack 开发的 px2rem-loader 精简实现方式

# 安装
npm install px2rem-simple-loader --save

# 使用
- webpack.config.js
```
module: {
	rules: [
		'style-loader',
		'css-loader',
		{
			loader: 'px2rem-simple-loader',
			options: {
				rate: 100
			}
		}
	]
}
```


- vue.config.js
```
chainWebpack: config => {
	config.module
		.rule('scss')    // 针对scss 生效。可选sass css less
		.oneOf('normal') // 针对normal模式生效。具体需要根目录运行vue inspect查看
		.use('px2rem-simple-loader')
		.loader('px2rem-simple-loader')
		.options({
			rate: 100,
		})
}
```

# 备注
vue-cli3项目推荐使用postcss选项比较好，以上配置在vue.config.js的选项只能针对scss文件生效，需要大量代码才能覆盖vue生成的webpack规则配置。[点击这里查看](https://cli.vuejs.org/zh/guide/webpack.html#%E4%BF%AE%E6%94%B9-loader-%E9%80%89%E9%A1%B9 "vue css.loaderOptions")Vue相关配置

