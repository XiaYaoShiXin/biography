<template>
    <transition :appear-class="this.appearClass" :appear-active-class="this.activeClass" :name="transition"appear>
        <Card class="header-down" v-show="visible">
            <Row slot="title" :style="{fontSize:numberSize+'px'}">
                 <Col style="border-right:1px solid #e3e8ee;" span="8">{{thumbs.toLocaleString()}}
                    <div :style="{fontSize:titleSize+'px'}">赞</div>
                </Col>
                <Col style="border-right:1px solid #e3e8ee;" span="8">{{favors.toLocaleString()}}
                    <div :style="{fontSize:titleSize+'px'}">收藏</div>
                </Col>
                <Col span="8">{{fans.toLocaleString()}}
                    <div :style="{fontSize:titleSize+'px'}">关注</div>
                </Col>
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
            default: null
        },
        titleSize: {
            type: Number,
            default: 24
        },
        appear: {
            type: String,
            default: null
        },
        numberSize: {
            type: Number,
            default: 18
        },
        thumbs: Number,
        favors: Number,
        fans: Number
    },
    data: function() {
        return { 
            appearClass: this.appear + '-enter',
            activeClass: this.appear + '-enter-active'
        };
    }
}
</script>

<style scoped>

.header-down {
    position: relative;
    border-radius: 20px;
    transition: all .4s;
    text-align: center;
    height: 208px;
    z-index: 0;
}

@media (max-width:768px) {
    .header-down {
        width: 99%;
    }
}

@media (max-width:400px) {
    .header-down {
        margin-top: 25px;
    }
}

</style>