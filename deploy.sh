#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'www.xuyunsheng.com' > CNAME

git init
git add -A
git commit -m '更新为 vuepress 博客'

# 如果发布到 https://mzcc666GtHb.github.io
# git push -f https://github.com/mzcc666GtHb/mzcc666GtHb.github.io.git master
git push -f https://github.com/mzcc666GtHb/mzcc666GtHb.github.io.git master


cd -
