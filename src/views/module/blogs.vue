<!-- 博客文章 -->
<template>
    <div class="my-blogs">
        <div class="article">
            <div class="lt-box">
                <div class="main">
                    <p>之前版本可以直接在my.cnf中添加sql_mode就行，但是在8.0.x版本中无效（具体哪个版本开始的不清楚，当前使用的是8.0.30版本）</p>

                    <p>解决方案</p>
                    <p>我们需要新建一个custom.cnf文件</p>

                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>[mysqld]</p>

                    <p>sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION
                    </p>
                    <p>我是把所有配置文件和数据都映射到服务器文件夹里，所以我的下一步是删除原有容器，然后映射到docker容器里（假设文件放在/docker/mysql里）</p>

                    <p>1</p>
                    <p>-v /docker/mysql/custom.cnf:/etc/mysql/conf.d/custom.cnf</p>
                    <p>最后重新运行容器即可</p>

                    <p>贴出完整的运行命令</p>
                    <p>之前版本可以直接在my.cnf中添加sql_mode就行，但是在8.0.x版本中无效（具体哪个版本开始的不清楚，当前使用的是8.0.30版本）</p>

                    <p>解决方案</p>
                    <p>我们需要新建一个custom.cnf文件</p>

                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>[mysqld]</p>

                    <p>sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION
                    </p>
                    <p>我是把所有配置文件和数据都映射到服务器文件夹里，所以我的下一步是删除原有容器，然后映射到docker容器里（假设文件放在/docker/mysql里）</p>

                    <p>1</p>
                    <p>-v /docker/mysql/custom.cnf:/etc/mysql/conf.d/custom.cnf</p>
                    <p>最后重新运行容器即可</p>

                    <p>贴出完整的运行命令</p>
                </div>
            </div>
            <div class="rt-box">
                <div class="user-box">
                    <img src="https://ytxy-images.oss-cn-shanghai.aliyuncs.com/images/logo.png" class="avatar" alt=""
                        draggable="false" />
                    <span class="message">前行的路充满未知，不努力尝试，永远都不知道有多精彩。</span>
                </div>
                <div class="views-box">
                    <i class="ycyui icon-visible">999</i>
                    <i class="ycyui icon-dianzan">888</i>
                    <i class="ycyui icon-collect">777</i>
                </div>
                <div class="labels-box">
                    <span class="title">标签</span>
                    <div class="labels">
                        <a href="javascript:;"># 编程</a>
                        <a href="javascript:;"># 编程</a>
                        <a href="javascript:;"># 编程</a>
                        <a href="javascript:;"># 编程</a>
                        <a href="javascript:;"># 编程</a>
                        <a href="javascript:;"># 编程</a>
                        <a href="javascript:;"># 编程</a>
                        <a href="javascript:;"># 编程</a>
                        <a href="javascript:;"># 编程</a>
                        <a href="javascript:;"># 编程</a>
                        <a href="javascript:;"># 编程</a>
                        <a href="javascript:;"># 编程</a>
                    </div>
                </div>
                <div class="news-box">
                    <span class="title">最新</span>
                    <div class="news">
                        <a href="javascript:;">某JS逆向记录</a>
                        <a href="javascript:;">某JS逆向记录</a>
                        <a href="javascript:;">某JS逆向记录</a>
                        <a href="javascript:;">某JS逆向记录</a>
                        <a href="javascript:;">某JS逆向记录</a>
                        <a href="javascript:;">某JS逆向记录</a>
                        <a href="javascript:;">某JS逆向记录</a>
                        <a href="javascript:;">某JS逆向记录</a>
                        <a href="javascript:;">某JS逆向记录</a>
                        <a href="javascript:;">某JS逆向记录</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="operate-box">
            <button>赏</button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import "src/assets/css/views/module/detail-child.scss";
</style>
