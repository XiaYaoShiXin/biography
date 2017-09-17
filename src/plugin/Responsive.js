import Vue from 'vue';

export default {
    install() {
        Vue.mixin({
            created: function() {
                var width = window.innerWidth;
                this.$screen = width;
                if (typeof this.resize == 'function') this.resize(width);
                var self = this;
                window.addEventListener('resize', function() { //监听
                    width = window.innerWidth;
                    self.$screen = width;
                    if (typeof self.resize == 'function') self.resize(width);
                });
            }
        });
    }
}