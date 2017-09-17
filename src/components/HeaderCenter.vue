<template>
    <transition :name="appear" appear>
        <Card class="header-center" :padding="4">
            <img :src="img" />
            <div class="avater-editor" :class="{hover:hover}" @click="edit" @mouseenter="toggleCover(true)" @mouseleave="toggleCover(false)">
                <div class="avater-cover"><Icon name="icon" type="camera"/><div name="text">修改头像</div></div>
            </div>
        </Card>
    </transition>
</template>

<script>
export default{
    props: {
        img: String,
        appear: String
    },
    data() {
        return {
            hover: false,
        };
    },
    methods: {
        toggleCover(state) {
            this.hover = state;
        },
        edit(){
            //编辑头像 略
        }
    }
}
</script>

<style scoped>

.header-center {
    position: absolute !important;
    top: 0;
    left: 50%;
    margin-left: -104px;
    width: 208px;
    height: 208px;
    border-radius: 104px !important;
    background-color: white;
    z-index: 3;
}

img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.avater-editor {
    position: absolute;
    top: 0;
    left: 0;
    width: 198.4px;
    height: 198.4px;
    border-radius: 99.2px;
    margin: 4px 0 0 4px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.4s;
    cursor: pointer;
}

.avater-editor.hover {
    opacity: 100;
}

.avater-cover {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}

[name="icon"] {
    font-size: 48px !important;
}

[name="text"] {
    font-size: 24px !important;
}

</style>