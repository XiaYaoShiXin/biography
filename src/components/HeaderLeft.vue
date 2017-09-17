<template>
    <transition :name="transition" :appear-class="this.appearClass" :appear-active-class="this.activeClass" appear>
        <Card class="profile-card header-left" v-show="visible">
            <div class="list">
                <div>{{born_in}}人氏 现居{{live_in}}</div>
                <div>{{education.university}}·{{education.major}}专业</div>
                <div>就职于{{jobs.company}}·{{jobs.title}}</div>
            </div>
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
        jobs: Object,
        education: Object,
        born_in: String,
        live_in: String
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

.header-left {
    right: 50%;
    z-index: 1 !important;
}

.list {
    position: absolute;
    left:0;
    right: 104px;
    top: 50%;
    transform: translateY(-50%);
    text-align: right;
}

</style>