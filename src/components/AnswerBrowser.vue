<template>
    <div>
        <Card class="owner">
            <img :src="owner.avater" class="owner-avater" />
            <h1 class="owner-name">{{owner.name}}</h1>
            <Button v-if="!isFollowed" type="primary" icon="plus" class="owner-follow" @click="follow">关注传主</Button>
            <Button v-else type="ghost" icon="close" class="owner-follow" @click="follow">取消关注</Button>
            <div class="owner-sign">{{owner.sign}}</div>
        </Card>
        <Card class="answer-browser">
            <h3 class="answer-header">{{numbers}}个回答</h3>
            <answer v-for="answer in answers" :writer="answer.writer" :content="answer.content" :thumbs="answer.thumbs" :reviews="answer.reviews" :comments="answer.comments" :published_at="answer.published_at" :edited_at="answer.edited_at" :isThumbed="answer.isThumbed" :thumber="function(){thumber(answer);}" :commenter="function(comment){commenter(answer,comment);}"></answer>
        </Card>
        <Card class="answer-relation">
            <h3 class="answer-header">相关人物</h3>
            <div class="people-list" v-for="people in relations">
                <writer :name="people.name" :sign="people.sign" :avater="people.avater"></writer>
            </div>
        </Card>
    </div>
</template>

<script>
import Answer from './Answer.vue';
import Writer from './Writer.vue';

export default {
    props:{
        id:Number,
        name:String,
        sign:String,
        avater:String,
        home:String
    },
    components:{
        'answer':Answer,
        'writer':Writer
    },
    data() {
        return {
            answers: [{
                writer: {
                    name: "侯志琨",
                    sign: "杭州电子科技大学在校生 熟悉Vue框架下的前端开发,以及Laravel框架下的PHP后端开发",
                    avater: "src/assets/img/avater.jpg",
                    home: "home.html"
                },
                content: `随便从知乎上复制了一段话。<br />其实就是待着。<br />迫击炮这东西打个几发就要转移一下，否则敌方炮火就过来了。炮弹差不多了，后勤会补充，实际上，每次战斗之前指挥官都会预算一下消耗弹药量，根据任务准备弹药量，这个当然要多预备一些，留个余量。<br />至于说战斗太激烈了，顶不住了怎么办。分情况，要是保家卫国，身后就是莫斯科这种情况，那没办法，有枪要上，没有枪捡别人的枪也要上。<br />一般情况下会撤，相较于步兵，炮兵毕竟是技术兵种，当步兵使不划算，现代战争之所以一支部队伤亡30%就撤也是这个原因，一线战斗人员也就30%，伤亡30%意味着一线人员死光了，在上就是炮兵、医护兵、防化兵、防空兵这些技术兵种了，消耗这些人得不偿失。<br/>另外建议楼主玩一下《近距离作战》这款游戏，就会发现迫击炮的用法：<br />1、真正作战的时候，大部分敌人你是看不见的，除非他朝你射击；<br />2、敌人在几个班快速奔跑且扎堆的情形下，用迫击炮来一发那是很爽的，但挨一发后敌人会很快卧倒、分散、隐蔽，这个时候迫击炮杀伤力有限；<br />3、敌方有一门反坦克炮藏在树林里了，我方坦克难以通过，好吧，果断拿迫击炮轰一轮，运气好几发就能引爆弹药箱；<br />4、进攻受阻时可以压制敌方火力，尤其是重机枪，啥，你说用狙击手，狙击手会被机枪压制的没法抬头的，电影里都是骗人的；<br/>5、进攻前，或是快速通过开阔区域时，可以先放一发烟幕弹，再朝敌人可能的位置持续开炮，以压制敌人。`,
                thumbs: 1321,
                reviews: 2,
                comments: [
                    { writer: '侯志琨', avater: 'src/assets/img/avater.jpg', text: '这是一条评论' },
                    { writer: '侯志琨', avater: 'src/assets/img/avater.jpg', text: '这是另一条评论' }
                ],
                published_at: '2016-04-27',
                edited_at: '2017-09-14',
                isThumbed: false
            }, {
                writer: {
                    name: "侯志琨",
                    sign: "手机:15035614520 邮箱:709258220@qq.com 欢迎联络",
                    avater: "src/assets/img/avater.jpg",
                    home: "home.html"
                },
                content: `随便从知乎上复制了一段话。`,
                thumbs: 1321,
                reviews: 0,
                comments: [],
                published_at: '2016-04-27',
                edited_at: '2017-09-14',
                isThumbed: false
            }],
            numbers: 2,
            relations: [{
                name: '毛泽东',
                avater: 'src/assets/img/maozedong.png',
                sign: '伟大的无产阶级革命家'
            }, {
                name: '周恩来',
                avater: 'src/assets/img/zhouenlai.png',
                sign: '人民的好总理'
            }, {
                name: '陈云',
                avater: 'src/assets/img/chenyun.png',
                sign: '排行第二位的八长老'
            }, {
                name: '江泽民',
                avater: 'src/assets/img/jiangzemin.png',
                sign: '时间之主，江泽之王'
            }, {
                name: '胡锦涛',
                avater: 'src/assets/img/hujintao.png',
                sign: '拉萨之虎,爱笑的面瘫'
            }],
            owner: {
                name: '邓小平',
                avater: 'src/assets/img/dengxiaoping.png',
                sign: '邓小平（1904～1997），四川广安人，1904年8月22日生，原名邓先圣，学名邓希贤。邓小平是中国共产党第二代领导核心领导者，伟大的马克思主义者，无产阶级革命家、政治家、军事家、外交家，中国共产党、中国人民解放军、中华人民共和国的主要领导人之一，中国社会主义改革开放和现代化建设的总设计师，邓小平理论的创立者。'
            },
            isFollowed: false,
            thumber: function(answer) {
                if (answer.isThumbed) {
                    answer.thumbs--;
                } else {
                    answer.thumbs++;
                }
                answer.isThumbed = !answer.isThumbed;
            },
            commenter: function(answer, comment) {
                answer.comments.push({
                    writer: '侯志琨',
                    avater: 'src/assets/img/avater.jpg',
                    text: comment
                });
                answer.reviews++;
            }
        };
    },
    methods: {
        follow() {
            this.isFollowed = !this.isFollowed;
        }
    }
}
</script>

<style scoped>

.answer-browser {
    margin-top: 10px;
    text-align: left;
    position: relative;
    display: inline-block;
    width: 100%;
    max-width: 714px;
}

.answer-relation {
    margin-top: 10px;
    margin-left: 10px;
    vertical-align: top;
    display: inline-block;
    width: 300px;
}

.answer-header {
    padding: 5px;
    text-align: left;
    border-bottom: 1px solid #eeeeee;
}

.people-list {
    margin-top: 10px;
    text-align: left;
}

.owner {
    width: 100%;
    max-width: 1024px;
    min-height: 200px;
    text-align: left;
}

.owner-name {
    color: black;
    float: left;
    margin-left: 16px;
    display: inline-block;
}

.owner-avater {
    display: inline-block;
    width: 168px;
    height: 168px;
    border-radius: 9px;
    float: left;
}

.owner-follow {
    float: left;
    margin-left: 16px;
    margin-top: 3px;
}

.owner-sign {
    display: inline-block;
    padding-top: 16px;
}

@media (min-width: 714px) {
    .owner-sign {
        display: block;
        margin-top: 30px;
        margin-left: 168px;
        padding-left: 16px;
    }
}

</style>