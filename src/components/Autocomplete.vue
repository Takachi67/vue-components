<template>
    <div :class="['relative', containerClass]">
        <input type="text" :class="inputClass" @input="inputText" @focusin="showResults = results.length > 0" @focusout="showResults = false" v-bind="$attrs">
        <slot name="results">
            <ul :class="['absolute top-10', resultsClass]" v-show="showResults">
                <li :class="elementClass" v-show="formattedResults.length === 0">No results</li>
                <li :class="elementClass" v-for="result in formattedResults">{{ displayResult(result) }}</li>
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
        }
    },
    data() {
        return {
            timeout: null,
            showResults: false
        }
    },
    methods: {
        inputText(event) {
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => this.$emit('onInput', event.target.value), this.delay)
        }
    },
    computed: {
        formattedResults() {
            if (this.limit === -1) return this.results
            else return this.results.slice(0, this.limit)
        }
    }
}
</script>