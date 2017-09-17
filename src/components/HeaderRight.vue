<template>
    <transition :appear-class="this.appearClass" :appear-active-class="this.activeClass" :name="transition" appear>
        <Card class="profile-card header-right" v-show="visible">
            <Row class="row" :style="{fontSize:numberSize+'px'}">
                <Col span="8">{{thumbs.toLocaleString()}}<div :style="{fontSize:textSize+'px'}">赞</div></Col>
                <Col span="8">{{favors.toLocaleString()}}<div :style="{fontSize:textSize+'px'}">收藏</div></Col>
                <Col span="8">{{  fans.toLocaleString()}}<div :style="{fontSize:textSize+'px'}">关注</div></Col>
            </Row>
        </Card>
    </transition>
</template>

<script>
export default{
    props: {
        visible: {
            type: Boolean,
            default: true
        },
        transition: {
            type: String,
            default: "fade"
        },
        appear: {
            type: String,
            default: null
        },
        textSize: {
            type: Number,
            default: 24
        },
        numberSize: {
            type: Number,
            default: 18
        },
        thumbs: Number,
        favors: Number,
        fans: Number
    },
    data() {
        return {
            appearClass: this.appear + '-enter',
            activeClass: this.appear + '-enter-active'
        };
    }
}
</script>

<style scoped>

.header-right {
    left: 50%;
}

.row {
    position: absolute;
    top: 50%;
    left: 104px;
    right: 0;
    margin-top:-36px;
}

</style>