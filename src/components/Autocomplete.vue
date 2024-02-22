<template>
    <div class="atc-container">
        <div class="atc-input-container">
            <input type="text" class="atc-input" v-model="searchText" @focusin="showResults = results.length > 0" @focusout="closeResults" v-bind="$attrs">
            <slot name="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="atc-icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </slot>
            <button class="atc-btn" @click="clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <slot name="results">
            <ul class="atc-results" v-show="showResults">
                <li class="atc-item" v-show="formattedResults.length === 0">No results</li>
                <li class="atc-item" v-for="result in formattedResults" @click.stop="clickItem(result)">{{ displayResult(result) }}</li>
            </ul>
        </slot>
    </div>
</template>

<script>
export default {
    name: "Autocomplete",
    props: {
        results: {
            type: Array,
            default: () => []
        },
        delay: {
            type: Number,
            default: 0
        },
        displayResult: {
            type: Function,
            default: (item) => item.name
        },
        limit: {
            type: Number,
            default: -1
        },
        defaultSearchText: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            timeout: null,
            showResults: false,
            searchText: this.defaultSearchText
        }
    },
    methods: {
        clickItem(item) {
            this.$emit('selectItem', item)
            this.showResults = false
        },
        closeResults() {
            setTimeout(() => this.showResults = false, 200)
        },
        setText(text) {
            this.searchText = text
        },
        clear() {
            this.$emit('clearInput')
            this.searchText = ''
        }
    },
    watch: {
        'searchText': function (value) {
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => this.$emit('onInput', value), this.delay)
            if (value.length === 0) this.$emit('clearInput')
        }
    },
    computed: {
        formattedResults: (state) => state.limit === -1 ? state.results : state.results.slice(0, state.limit)
    }
}
</script>

<style scoped>
.atc-container {
    position: relative;
}

.atc-input-container {
    display: flex;
    align-items: center;
    position: relative;
}

.atc-input {
    width: 100%;
    border-radius: 0.5rem;
    border-width: 2px;
    padding: 0.25rem;
    height: 2.25rem;
}

.atc-input:focus {
    border-color: rgb(148 163 184);
    outline: none;
}

.atc-icon {
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    right: 2.5rem;
    top: 0.35rem;
    opacity: 50%;
}

.atc-btn {
    display: flex; 
    position: absolute; 
    top: 0.1rem; 
    right: 0; 
    padding-left: 0.5rem;
    padding-right: 0.5rem; 
    justify-content: center; 
    align-items: center; 
    border-left-width: 2px;
    height: 2rem;
}

.atc-results {
    overflow-y: auto; 
    border-radius: 0.5rem; 
    border-width: 2px; 
    width: 100%; 
    max-height: 13rem; 
    position: absolute;
    top: 2.5rem;
}

.atc-item {
    padding: 0.5rem; 
    cursor: pointer; 
}

.atc-item:hover {
    background-color: rgb(248 250 252);
}
</style>