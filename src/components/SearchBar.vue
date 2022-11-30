<template>
    <div class="search-bar">
        <form class="search-bar__form" @submit.prevent="onSubmit">
            <input type="hidden" id="offset" name="offset"  v-model="offset"/>
            <input type="hidden" id="limiter" name="limit" v-model="limit"/>
            <input type="hidden" id="region" name="region" v-model="region"/>
            <input
                class="search-bar__input"
                name="q"
                autocomplete="off"
                id="search_form_input"
                spellcheck="false"
                v-model="q"
                @input="onSearchInputChange"
            />
            <i
                id="search_form_input_clear"
                class="icon-cross"
                v-bind:class="{ visible: isInputNotEmpty }"
                @click="onClearIconClick"
            ></i>
            <input 
                class="search-bar__button" 
                type="submit" 
                id="search_button" 
                value="Search"
                />
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            offset: 0,
            limit: 20,
            region: "",
            q: "",
            isInputNotEmpty: false
        }
    },
    methods: {
        onSubmit() {
            if(this.q.trim()) {
                const query = {
                    q: this.q,
                    limit: this.limit,
                    offset: this.offset,
                    region: this.region
                }
                this.$emit('search', query)
            }
        },
        onSearchInputChange() {
            if(this.q !== "") this.isInputNotEmpty = true;
            else this.isInputNotEmpty = false;
        },
        onClearIconClick(event, item) {
            this.q = "";
        }
    }
}
</script>


<style>
.search-bar {
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
    height: 100%;
}

.search-bar__form {
    border: 3px solid rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    height: 100%;
}

.search-bar__input {
    width: 100%;
    border: none;
    outline: none;
    margin: 5px;
}

.search-bar__button {
   border: none;
   border-top-right-radius: 6px;
   border-bottom-right-radius: 6px;
}

.search-bar__button:hover {
    background-color: rgba(0, 0, 0, 0.15);
}
.icon-cross {
  padding-top: 4.5px;
  margin-right: 7px;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  visibility: hidden;
}
.icon-cross:hover {
  opacity: 1;
}

.icon-cross:before, .icon-cross:after {
  position: absolute;
  content: ' ';
  height: 25px;
  width: 2px;
  background-color: #333;
}

.icon-cross:before {
  transform: rotate(45deg);
}
.icon-cross:after {
  transform: rotate(-45deg);
}
.visible {
    visibility: visible;
}
</style>