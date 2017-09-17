<template>
    <div class="answer">
        <writer :name="writer.name" :sign="writer.sign" :avater="writer.avater" :home="writer.home"></writer>
        <div class="answer-content" v-html="content"></div>
        <a class="answer-thumb" @click="this.thumber"><span v-if="isThumbed">取</span><span v-else>点</span>赞({{thumbs}})</a>
        <a class="answer-review" @click="toComment">评论<span v-if="reviews>0">({{reviews}})</span></a>
        <a class="answer-report">举报</a>
        <span class="answer-time">发布于 {{published_at}}，编辑于 {{edited_at}}</span>
        <card v-show="isCommenting">
            <div class="comment" v-for="comment in comments">
                <img class="comment-avater" :src="comment.avater"/>
                <b>{{comment.writer}}:</b>
                <span>{{comment.text}}</span>
            </div>
            <table class="comment-inputer">
                <tr>
                    <td><i-input v-model="review" placeholder="写下你的评论..." /></td>
                    <td width="25px"><i-button type="primary" @click="comment">发布</i-button></td>
                </tr>
            </table>
        </card>
    </div>
</template>

<script>
import Writer from './Writer.vue';

export default {
    props: {
        writer: Object,
        content: String,
        thumbs: Number,
        reviews: Number,
        comments: Array,
        published_at: String,
        edited_at: String,
        isThumbed: Boolean,
        thumber: Function,
        commenter: Function
    },
    components:{
        'writer':Writer
    },
    data() {
        return {
            isCommenting: false,
            review: null
        };
    },
    methods: {
        thumb() {
            if (this.isThumbed) {
                this.thumbs--;
            } else {
                this.thumbs++;
            }
            this.isThumbed = !this.isThumbed;
        },
        toComment() {
            this.isCommenting = !this.isCommenting;
        },
        comment() {
            if (this.review == null) return;
            this.commenter(this.review);
        }
    }
}
</script>
        
<style scoped>

.answer-time {
    float: right;
    margin-top: 10px
}

.answer-report {
    display: inline-block;
    margin-left: 10px;
    margin-top: 10px;
}

.answer-review {
    display: inline-block;
    margin-left: 10px;
    margin-top: 10px;
}

.answer-thumb {
    display: inline-block;
    margin-left: 0;
    margin-top: 10px;
}

.answer-content {
    margin-top: 10px;
    color: black;
}

.answer {
    padding: 10px 0;
    border-bottom: 1px solid #eeeeee;
}

.comment-inputer {
    padding-top: 16px;
    width: 100%;
    border-top: 1px solid #eeeeee;
}

.comment-avater {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    vertical-align: middle;
}

.comment {
    margin: 10px 0;
}

</style>