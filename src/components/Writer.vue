<template>
    <div class="writer">
        <a class="writer-avater" :href="home">
            <img :src="avater" />
        </a>
        <div class="writer-info">
            <a class="writer-name" :href="home">{{name}}</a>
            <div class="writer-sign" :title="sign">{{sign}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        id:Number,
        name:String,
        sign:String,
        avater:String,
        home:String
    }
}
</script>

<style scoped>

.writer { 
    height: 58px;
    position: relative;
}

.writer-avater { 
    display: inline-block;
    position: absolute;
    width: 58px;
    height: 58px;
}

.writer-avater>img { 
    width: 58px;
    height: 58px;
    border-radius: 4px;
}

.writer-info { 
    height: 58px;
    width: 100%;
    padding-left: 68px;
}

.writer-name { 
    font-size: 24px;
    color: #333333;
    font-weight: 500;
    white-space: nowrap;
    transition: all .4s;
}

.writer-name:hover { 
    color: black;
}

.writer-sign { 
    font-size: 14px;
    padding-right: 10px;
    color: #666666;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

</style>