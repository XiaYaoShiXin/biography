<template>
<div class="ui-layer" unselectable="on">
        <div class="top-bar">
            
            <div key="nav" class="nav-bar" :class="{mobile:mobile}">
                
                <transition-group name="nav-item">
                    <a key="index" v-show="!mobile" class="nav-item">首页</a>
                    <a key="catelog" v-show="!mobile" class="nav-item">目录</a>
                    <a key="bookstore" v-show="!mobile" class="nav-item">百书坊</a>
                </transition-group>
                <transition name="search-label">
                    <div key="search-label" v-show="!mobile" class="search-label">
                        <input placeholder="搜索" class="search-input" spellcheck="false"/>
                        <a class="search-btn">
                            <Icon type="android-search" />
                        </a>
                    </div>
                </transition>

                <a key="menu" v-show="mobile" class="menu-btn" @click="MainPanel">
                    <Icon type="navicon" style="line-height:50px;" size="36" />
                </a>
                <a key="user" v-show="mobile" class="user-btn" @click="UserPanel">
                    <Icon type="grid" style="line-height:50px;" size="36" />
                </a>
                <transition name="fade">
                    <img key="logo" v-show="mobile" class="logo" src="src/assets/img/logo.png" />
                </transition>
            </div>
        </div>

        <transition name="fade">
        <div class="main-panel" v-show="mainPanel">
            <center class="nav-bar">
                <a class="nav-item" href="#">首页</a>
                <a class="nav-item" href="#">目录</a>
                <a class="nav-item" href="#">百书坊</a>
            </center>
            <div class="search-label">
                <input class="search-input" spellcheck="false" placeholder="搜索" />
                <a class="search-btn">
                    <Icon type="android-search" :size="48" />
                </a>
            </div>
        </div>
        </transition>

        <transition name="fade">
            <Card class="user-panel" v-show="userPanel">
                <div slot="title">
                    <div class="info-block">
                        <a :href="user.home"><img class="info-avater" :src="user.avater"/></a>
                        <div class="info-right">
                            <div class="info-name"><a :href="user.home">{{user.name}}</a></div>
                            <div class="info-sign">{{user.sign}}</div>
                        </div>
                    </div>
                    <table class="data-block">
                        <tr>
                            <td>关注<br />{{user.followers}}</td>
                            <td>粉丝<br />{{user.fans}}</td>
                            <td>赞数<br />{{user.thumbs}}</td>
                            <td>收藏<br />{{user.favors}}</td>
                        </tr>
                    </table>
                </div>
                <h1 style="text-align:center">还没想好的功能模块</h1>
            </Card>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mobile: false,
            mainPanel: false,
            userPanel: false,
            user: {
                name: '侯志琨',
                sign: '人间自由芳菲睹，仗剑且行天涯路',
                avater: 'src/assets/img/avater.jpg',
                favors: 145,
                thumbs: 27586,
                followers: 98,
                fans: 3850
            }
        };
    },
    watch: {
        mobile(val) {
            if (!val) {
                this.mainPanel = false;
                this.userPanel = false;
            }
        }
    },
    methods: {
        MainPanel() {
            this.mainPanel = !this.mainPanel;
            if (this.userPanel && this.mainPanel) this.userPanel = false;
        },
        UserPanel() {
            this.userPanel = !this.userPanel;
            if (this.mainPanel && this.userPanel) this.mainPanel = false;
        },
        resize(width){
            this.mobile = width<=1024;
        }
    }
}
</script>

<style scoped>

.ui-layer {
    position: relative;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    z-index: 9;
}

.top-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    line-height: 50px;
    color: white;
    font-size: 14px;
    background-color: black;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
}

.logo {
    width: 100px;
    height: 50px;
    position: absolute;
    left: 50%;
    margin-left: -50px;
}

.main-panel {
    position: fixed;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .85);
}

.user-panel {
    position: fixed;
    top: 50px;
    bottom: 5px;
    left: 5px;
    right: 5px;
}

.nav-item {
    display: inline-block;
    padding: 0 17px;
    transition: all .4s;
    white-space: nowrap;
    color: #bbbbbb;
}

.nav-item:hover {
    color: white;
}

.top-bar .nav-bar {
    position: absolute;
    left: 50%;
    margin-left: -512px;
    width: 1024px;
    height: 100%;
}

.top-bar .nav-bar.mobile {
    margin: 0;
    left: 0;
    width: 100%;
}

.top-bar .nav-item {
    height: 50px;
}

.top-bar .nav-item:hover {
    background-color: #373e40;
    box-shadow: inset 0 0 7px black;
}

.top-bar .search-label {
    display: inline-block;
    float: right;
    position: relative;
    min-width: 30px;
    height: 50px;
    transition: all .4s;
}

.top-bar .search-input {
    height: 36px;
    background-color: #eeeeee;
    border: none;
    outline: none;
    padding: 3px 30px 3px 18px;
    border-radius: 18px;
    width: 200px;
    box-shadow: inset 0 0 5px #333333;
    transition: all .4s;
}

.top-bar .search-input:focus {
    width: 600px;
}

.top-bar .search-btn {
    position: absolute;
    right: 4px;
    top: 10px;
    border-radius: 15px;
    height: 30px;
    width: 30px;
    color: black;
    font-size: 18px;
    text-align: center;
    line-height: 30px;
    transition: all .4s;
}

.top-bar .search-btn:hover {
    background-color: #999999;
    color: #eeeeee;
}

.top-bar .menu-btn {
    float: left;
    margin-left: 15px;
}

.top-bar .user-btn {
    float: right;
    margin: 0 15px;
}

.top-bar .menu-btn,
.top-bar .user-btn {
    color: #bbbbbb;
    transition: all .4s;
}

.top-bar .menu-btn:hover,
.top-bar .user-btn:hover {
    color: white;
}

.main-panel .nav-bar {
    margin-top: 20px;
}

.main-panel .nav-bar>a {
    font-size: 24px;
}

.main-panel .search-label {
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    max-width: 400px;
}

.main-panel .search-input {
    border: none;
    outline: none;
    background: transparent;
    font-size: 48px;
    color: white;
    border-bottom: 1px solid #bbbbbb;
    padding: 0 60px 0 8px;
    width: 100%;
}

.main-panel .search-input::placeholder {
    color: white;
}

.main-panel .search-btn {
    transition: all .4s;
    color: #bbbbbb;
    position: absolute;
    right: 12px;
    bottom: 12px;
}

.main-panel .search-btn:hover {
    color: white;
}

.info-block {
    display: inline-block;
    padding: 12px;
    width: 42%;
    position: relative;
}

.data-block {
    display: inline-table;
    text-align: center;
    width: 57%;
    vertical-align: top;
    margin-top: 12px;
    height: 68px;
    margin-bottom: 12px;
    border-left: 1px solid #eeeeee;
}

.info-block .info-avater {
    width: 68px;
    margin-right: 12px;
    height: 68px;
    border-radius: 9px;
}

.info-block .info-right {
    position: absolute;
    left: 92px;
    right: 12px;
    top: 12px;
    bottom: 12px;
}

.info-name a {
    font-size: 18px;
    transition: all .4s;
    color: #333 !important;
}

.info-name a:hover {
    color: black !important
}

.info-block .info-sign {
    margin-top: 5px;
}

@media (max-width:480px) {
    .info-block {
        width: 100%;
    }
    .data-block {
        width: 100%;
        height: auto;
        margin-top: 0;
        border: none;
    }
}

.nav-item-enter,
.nav-item-leave-active {
    width: 0;
    padding: 0;
    float: left;
    opacity: 0;
}

.search-label-enter,
.search-label-leave-active {
    margin-right: -200px;
    opacity: 0;
}

</style>