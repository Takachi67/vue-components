<template>
    <div class="mt-5 pt-3 border-t">
        <h2 class="text-xl font-medium text-orange-700 text-center">Autocomplete</h2>
        <br>
        <p>Autocomplete component provides a highly customisable input with a results block</p>
        <br>
        <span class="font-bold">- Available props</span>
        <div class="grid grid-cols-4 mt-3">
            <span class="table-header">Props</span>
            <span class="table-header">Description</span>
            <span class="table-header">Type</span>
            <span class="table-header">Default value</span>

            <span class="table-item">containerClass</span>
            <span class="table-item">Classes used on the component container</span>
            <span class="table-item">String</span>
            <span class="table-item italic">empty string</span>

            <span class="table-item">inputClass</span>
            <span class="table-item">Classes used on the input</span>
            <span class="table-item">String</span>
            <span class="table-item">w-full rounded-lg border-2 p-1 focus:border-slate-400 focus:outline-none</span>

            <span class="table-item">resultsClass</span>
            <span class="table-item">Classes used on the results block</span>
            <span class="table-item">String</span>
            <span class="table-item">border-2 rounded-lg w-full max-h-52 overflow-y-auto</span>

            <span class="table-item">elementClass</span>
            <span class="table-item">Classes used on each result item</span>
            <span class="table-item">String</span>
            <span class="table-item">p-2 cursor-pointer hover:bg-slate-50</span>

            <span class="table-item">results</span>
            <span class="table-item">Items to display in the results block</span>
            <span class="table-item">Array</span>
            <span class="table-item">[]</span>

            <span class="table-item">delay</span>
            <span class="table-item">Time to wait before emitting the event after the user stopped typing into the input (milliseconds)</span>
            <span class="table-item">Number</span>
            <span class="table-item">0</span>

            <span class="table-item">displayResult</span>
            <span class="table-item">Method to display each item in the results block</span>
            <span class="table-item">Function</span>
            <span class="table-item">(item) => item.name</span>

            <span class="table-item">limit</span>
            <span class="table-item">Max number of items to display in the results block (-1 = no limit)</span>
            <span class="table-item">Number</span>
            <span class="table-item">-1</span>
        </div>
        <br>
        <span class="font-bold">- Examples</span>
        <br>
        <br>
        <span>1. Autocomplete with minimum props</span>
    </div>
</template>

<script>
export default {
    name: "AutocompleteView",
    data() {
        return {
            currentValue: '',
            elements: [
                { id: 1, name: 'Lucas' },
                { id: 2, name: "John" },
                { id: 3, name: "Elias" },
                { id: 4, name: "Lisa" }
            ]
        }
    }
}
</script>