# px2rem-simple-loader


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
备注: vue-cli3项目还是用postcss选项比较好，以上选项只能针对scss文件生效
```


