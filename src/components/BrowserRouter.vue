<template>
    <center>
        <ButtonGroup :vertical="mobile" class="home-menu" size="large">
            <Button :type="type.writing"><router-link to="/writing">TA的文章</router-link></Button>
            <Button :type="type.collection"><router-link to="/collection">TA的收藏</router-link></Button>
            <Button :type="type.favors"><router-link to="/favors">关注的收藏</router-link></Button>
            <Button :type="type.following"><router-link to="/following">关注的人</router-link></Button>
            <Button :type="type.followers"><router-link to="/followers">TA的粉丝</router-link></Button>
            <Button :type="type.thumbs"><router-link to="/thumbs">赞数统计</router-link></Button>
        </ButtonGroup>
    </center>
</template>

<script>
export default {
    data(){
        return {
            mobile:false
        };
    },
    computed: {
        current(){
            return this.$route.params.home_current_page;
        },
        type() {
            return {
                writing: this.current == 'writing' ? 'primary' : null,
                collection: this.current == 'collection' ? 'primary' : null,
                favors: this.current == 'favors' ? 'primary' : null,
                following: this.current == 'following' ? 'primary' : null,
                followers: this.current == 'followers' ? 'primary' : null,
                thumbs: this.current == 'thumbs' ? 'primary' : null
            };
        }
    },
    methods:{
        resize(width){
            this.mobile = width<768;
        }
    }
}
</script>

<style scoped>
.ivu-btn-primary a { 
    color:white; 
}

.home-menu {
    margin: 0 auto;
    position: relative;
    z-index: 0;
}

.home-menu.ivu-btn-group-vertical {
    margin-top: 10px;
    width: 99%;
}
</style>