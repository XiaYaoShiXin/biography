<template>
    <center class="home-header">
        <header-left :visible="!vertical" appear="fadeIn-left" transition="fadeIn-right" :born_in="born_in" :live_in="live_in" :education="education" :jobs="jobs"></header-left>
        <header-right :visible="!vertical" appear="fadeIn-right" transition="fadeIn-left" :thumbs="thumbs" :favors="favors" :fans="fans"></header-right>

        <transition name="fadeIn-right" appear>
            <div class="base-info">
                <span v-show="sex=='male'">男</span><span v-show="sex=='female'">女</span> {{age}}岁
            </div>
        </transition>
        <transition name="fadeIn-left" appear>
            <i-button @click="follow" v-if="!isFollowed" class="follow-button" type="primary" icon="plus">关注<span v-show="sex=='male'">他</span><span v-show="sex=='female'">她</span></i-button>
            <i-button @click="follow" v-else class="follow-button" type="ghost" icon="plus">取关<span v-show="sex=='male'">他</span><span v-show="sex=='female'">她</span></i-button>
        </transition>
            
        <header-center appear="zoomIn" :img="avater"></header-center>

        <transition name="fadeIn-top" appear>
            <div class="home-name">{{name}}</div>
        </transition>
        <transition name="fadeIn-top" appear>
            <div class="home-sign">{{sign}}</div>
        </transition>

        <header-down :visible="vertical" transition="rollIn-top" appear="fadeIn-top" :thumbs="thumbs" :favors="favors" :fans="fans"></header-down>

    </center>
</template>

<script>
//大屏幕 左侧的个人信息栏
import HeaderLeft from './HeaderLeft.vue';
//大屏幕 右侧的用户成就栏
import HeaderRight from './HeaderRight.vue';
//中间的头像框组件
import HeaderCenter from './HeaderCenter.vue';
//小屏幕 下方的简略信息栏
import HeaderDown from './HeaderDown.vue';

export default{
    components: {
        'header-left'  : HeaderLeft,
        'header-right' : HeaderRight,
        'header-center': HeaderCenter,
        'header-down'  : HeaderDown
    },
    data() {
        return {
            name: "侯志琨",
            sign: "人间自有芳菲睹，仗剑且行天涯路",
            avater: 'src/assets/img/avater.jpg',
            thumbs: 132,
            favors: 7,
            sex: 'male',
            age: 25,
            education: {
                university: '杭州电子科技大学',
                major: '数字媒体技术'
            },
            jobs: { company: '网易金融事业部', title: '前端工程师' },
            vertical: false,
            thumbs: 224584,
            fans: 223457,
            favors: 124545,
            born_in: '山西晋中',
            live_in: '浙江杭州',
            isFollowed: false
        };
    },
    methods: {
        follow() {
            //ajax略
            this.isFollowed = !this.isFollowed;
        },
        resize(width){
            this.vertical = width<=768;
        }
    }
}
</script>

<style scoped>

    .home-header {
        position: relative;
        padding-top: 238px;
    }

    .home-header .follow-button {
        position: absolute;
        top: 10px;
        left: 50%;
        margin-left: 60px;
        transition: all 0.4s;
        z-index: 2;
    }
 
    .home-header .base-info {
        position: absolute;
        top: 5px;
        right: 50%;
        font-size: 24px;
        margin-right: 60px;
        white-space: nowrap;
        transition: all 0.4s;
        z-index: 2;
    }
 
    .home-header .home-name {
        position: absolute !important;
        z-index: 1;
        top: 170px;
        width: 100%;
        font-size: 36px;
        color: white;
        text-shadow: 0 0 10px black;
        z-index: 4;
        transition: all .4s !important;
    }
 
    .home-header .home-sign {
        position: absolute !important;
        z-index: 1;
        top: 215px;
        width: 100%;
        font-size: 16px;
        color: white;
        text-shadow: 0 0 10px black;
        z-index: 4;
        transition: all .4s !important;
    }

    .home-header>.profile-card {
        background-color: white;
        border-radius: 20px;
        top: 4px;
        height: 198px;
        width: 384px;
        position: absolute;
        transition-duration: 0.4s;
    }

    @media (max-width:768px) {
        .home-header .follow-button {
            margin-left: 100px;
        }
        .home-header .base-info {
            margin-right: 100px;
        }
    }
 
    @media (max-width:400px) {
        .home-header .follow-button {
            margin-left: 60px;
        }
        .home-header .base-info {
            margin-right: 60px;
        }
    }

</style>