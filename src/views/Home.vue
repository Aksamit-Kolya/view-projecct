<template>
    <div class="content">
        <div class="logo-wrap">
            <img
                title="ATAKATA"
                class="logo-wrap__image"
                src="../assets/logo_with_text.png"
                alt="atakata_logo"
                style="object-fit: contain;"
            />
        </div>
        <div class="search-wrapper">
            <SearchBar @search="search"/>
        </div>
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
export default {
    methods: {
        search(query) {
            this.$router.push({name: 'search', query: query}) 
        }
    },
    components: {
        SearchBar
    }
}
</script>

<style>
.content {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
    margin-top: 60px;
}

.logo-wrap {
    position: relative;
    display: block;
    max-width: 300px;
    margin: auto;
    margin-bottom: -1.2em;
    margin-top: -1.25em;
}
.logo-wrap__image {
    width: 293.5px;
    height: 200px;
    display: block;
    position: relative;
    margin: 0px auto;
    margin-bottom: 0px;
}
.search-wrapper {
    padding: 1.3em 0.8em 1em;
    margin-left: auto;
    margin-right: auto;
    display: block;
    float: none;
    width: 70%;
    height: 2.5em;
    max-width:1000 px;
}
</style>