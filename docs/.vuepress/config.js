console.log(__dirname, 'dirname');
module.exports = {
	title: '网络日志',
	keywords: '网络日志',
	description: '欢迎来到这里',
	head: [
		['link', {rel: 'icon', href: '/favicon.ico'}],
		['link', {rel: 'mainfest', href: '/mainfest.json'}],
	],
	port: 4000,
	markdown: {
		lineNumbers: false,
	},
	plugins: [
		'@vuepress/back-to-top',
		[
			'@vuepress/google-analytics',
			{
				'ga': 'UA-145436866-1' // UA-00000000-0
			},
		],
		[
			'@vuepress/medium-zoom',
			// {
			// 	selector: 'img',
			// 	// medium-zoom options here
			// 	// See: https://github.com/francoischalifour/medium-zoom#options
			// 	options: {
			// 		margin: 16
			// 	}
			// }
		],
	],
	serviceWorker: true, // 是否开启 PWA
	themeConfig: {
		nav: [
			{text: '主页', link: '/'},
			{text: '目录', link: '/posts/'},
			{
				text: '关于',
				link: '/about/'
			},
			{
				text: '其他',
				items: [
					{
						text: '简书',
						link: 'http://www.jianshu.com',
					},
					{
						text: '掘金',
						link: 'https://juejin.im',
					},
					{
						text: '思否',
						link: 'https://segmentfault.com/',
					},
					{
						text: '博客',
						link: 'https://www.cnblogs.com/'
					},
					{
						text: 'CSDN',
						link: 'https://www.csdn.net/'
					}
				],
			}
		],
		sidebar: [
			{
				title: '目录',
				collapsable: false,
			},
			{
				title: '源码系列',   // 必要的
				// path: '/about/',      // 可选的, 应该是一个绝对路径
				collapsable: true, // 可选的, 默认值是 true,
				sidebarDepth: 2,    // 可选的, 默认值是 1
				children: [
					'/lodash/',
					'/underscore/',
					'/jQuery/',
				]
			},
			{
				title: '面试系列',   // 必要的
				// path: '/about/',      // 可选的, 应该是一个绝对路径
				collapsable: true, // 可选的, 默认值是 true,
				sidebarDepth: 2,    // 可选的, 默认值是 1
				children: [
					'/js-extend/',
					'/js-this/',
					'/js-implement-call-apply/',
					'/js-implement-bind/',
					'/js-implement-new/',
				]
			},
			{
				title: '历史文章',   // 必要的
				// path: '/about/',      // 可选的, 应该是一个绝对路径
				collapsable: true, // 可选的, 默认值是 true,
				sidebarDepth: 2,    // 可选的, 默认值是 1
				children: [
					'/puppeteer-create-pdf-and-merge/',
					'/vue-cli-2-webpack/',
					'/oh-my-zsh/',
					'/20180421-youzan-front-end-tech-open-day/',
					'/vue-2-qrcode/',
					'/js-object-api/',
					'/js-book/',
				]
			},
			{
				title: '工具系列',   // 必要的
				// path: '/about/',      // 可选的, 应该是一个绝对路径
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 2,    // 可选的, 默认值是 1
				children: [
					'/webpack/'
				]
			},
			{
				title: '关于',   // 必要的
				// path: '/about/',      // 可选的, 应该是一个绝对路径
				collapsable: true, // 可选的, 默认值是 true,
				sidebarDepth: 2,    // 可选的, 默认值是 1
				children: [
					'/about/'
				]
			},
		],
		// sidebarDepth: 3,
		lastUpdated: '最后更新时间',
	},
	configureWebpack: {
		resolve: {
			alias: {
				'@images': '../images/',
			}
		}
	}
}
