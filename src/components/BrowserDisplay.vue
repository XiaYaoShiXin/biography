<template>
    <div>{{this.page}}</div>
</template>

<script>
export default {
    computed: {
        page: function() {
            return this.$route.params.home_current_page;
        }
    }
}
</script>