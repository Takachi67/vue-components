<template>
    <div :class="['relative', containerClass]">
        <input type="text" :class="inputClass" v-model="searchText" @focusin="showResults = results.length > 0" @focusout="closeResults" v-bind="$attrs">
        <slot name="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute right-10 top-1 opacity-50">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </slot>
        <button class="absolute border-l-2 px-2 right-0 top-0 h-full flex justify-center items-center" @click="clear">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>
        <slot name="results">
            <ul :class="['absolute top-10', resultsClass]" v-show="showResults">
                <li :class="elementClass" v-show="formattedResults.length === 0">No results</li>
                <li :class="elementClass" v-for="result in formattedResults" @click.stop="clickItem(result)">{{ displayResult(result) }}</li>
            </ul>
        </slot>
    </div>
</template>

<script>
export default {
    name: "Autocomplete",
    props: {
        containerClass: {
            type: String,
            default: ''
        },
        inputClass: {
            type: String,
            default: 'w-full rounded-lg border-2 p-1 focus:border-slate-400 focus:outline-none'
        },
        resultsClass: {
            type: String,
            default: 'border-2 rounded-lg w-full max-h-52 overflow-y-auto'
        },
        elementClass: {
            type: String,
            default: 'p-2 cursor-pointer hover:bg-slate-50'
        },
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