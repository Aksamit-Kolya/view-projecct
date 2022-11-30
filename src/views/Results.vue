<template>
    <div class="header">
        <a
            href="http://localhost:8081/"
            class="header__a"
            style="outline: none"
        ><img
                title="ATAKATA"
                class="header__logo"
                src="../assets/logo.png"
                alt="atakata_logo"
            />
        </a>
        <div class="header__search-wrapper">
            <SearchBar @search="search"/>
        </div>
    </div>
    <hr/>
    <div class="results">
        <template v-for="result in results">
            <Result class="results__result"
                v-bind:title="result.title"
                v-bind:url="result.link"
                v-bind:description="result.description"
            />
        </template>
    </div>
</template>

<script>
    import SearchBar from '@/components/SearchBar'
    import Result from '@/components/Result.vue'

    export default {
        data() {
            return {
                results: null
            }
        },
        methods: {
            search(query) {
                const url = new URL(window.location);
                url.searchParams.set('q', query.q);
                url.searchParams.set('limit', query.limit);
                url.searchParams.set('offset', query.offset);
                url.searchParams.set('location', query.region);
                window.history.pushState({}, '', url);
                this.searchRequest(query);
            },
            async searchRequest(query) {
                const searchParams = new URLSearchParams(query);
                const headers = { "Content-Type": "application/json" };
                const response = await fetch('http://localhost:8080/search?' + searchParams, { headers });
                this.results = await response.json();
            }
        },
        mounted() {
            this.searchRequest(this.$route.query)
        },
        components: {
            Result,
            SearchBar
        }
        
    }
</script>

<style>
.header {
    display: flex;
    align-items: center;
}
.header__search-wrapper {
    margin-top: 20px;
    margin-left: 30px;
    margin-bottom: 20px;
    display: block;
    float: none;
    width: 70%;
    height: 2.2em   
}

.header__logo {
    margin-top: 15px;
    max-height: 60px;
    max-width: 60px;
    object-fit: cover;
}
.results {
    max-width: 590px;
    padding-left: 58px;
}
.results__result {
    margin-top: 30px;
}
</style>