<template>
    <Card class="home-browser">
        <router-view name="BrowserDisplay"></router-view>
    </Card>
</template>

<style scoped>

.home-browser {
    max-width: 768px;
    height: 1500px;
    margin: 0 auto;
    transition-duration: 0.4s !important;
    border-radius: 20px !important;
    position: relative;
}

@media (max-width:768px) {
    .home-browser {
        width: 99%;
        margin-top: 5px;
    }
}

</style>