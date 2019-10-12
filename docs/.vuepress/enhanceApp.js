// .vuepress/enhanceApp.js
// 全局注册 Element 组件库
import Vue from 'vue'
// import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

function integrateGitalk(router) {
	const linkGitalk = document.createElement('link');
	linkGitalk.href = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css';
	linkGitalk.rel = 'stylesheet';
	document.body.appendChild(linkGitalk);
	const scriptGitalk = document.createElement('script');
	scriptGitalk.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js';
	document.body.appendChild(scriptGitalk);

	router.afterEach((to) => {
		if (scriptGitalk.onload) {
			loadGitalk(to);
		} else {
			scriptGitalk.onload = () => {
				loadGitalk(to);
			}
		}
	});

	function loadGitalk(to) {
		let commentsContainer = document.getElementById('gitalk-container');
		if (!commentsContainer) {
			commentsContainer = document.createElement('div');
			commentsContainer.id = 'gitalk-container';
			commentsContainer.style = 'max-width: 740px;margin: 0 auto;padding: 2rem 2.5rem;';
			commentsContainer.classList.add('content');
		}
		const $page = document.querySelector('.page');
		if ($page) {
			$page.appendChild(commentsContainer);
			if (typeof Gitalk !== 'undefined' && Gitalk instanceof Function) {
				renderGitalk(to.fullPath);
			}
		}
	}

	function renderGitalk(fullPath) {
		let commentsContainer = document.getElementById('gitalk-container');
		if (commentsContainer) {
			commentsContainer.innerHTML = '';
		}
		let gitalk = new Gitalk({
			clientID: '7bbb7507b3e512075dcf',
			clientSecret: '2905479b5125fa7b2d9b92dd2461acf2c159a564', // come from github development
			repo: 'mzcc666GtHb.github.io',
			owner: 'mzcc666GtHb',
			admin: ['mzcc666GtHb'],
			id: fullPath,
			distractionFreeMode: false,
			language: 'zh-CN',
		});
		gitalk.render('gitalk-container');
	}
}

export default ({Vue, options, router}) => {
	try {
		document && integrateGitalk(router)
	} catch (e) {
		console.error(e.message)
	}
}
