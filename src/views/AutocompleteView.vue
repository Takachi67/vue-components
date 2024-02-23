<template>
  <div class="mt-5 pt-3 border-t">
    <h2 class="text-xl font-medium text-orange-700 text-center">Autocomplete</h2>
    <br>
    <p>Autocomplete component provides a highly customisable input with a results block</p>
    <br>
    <p class="font-bold">- Available props</p>
    <div class="grid grid-cols-4 mt-3">
      <span class="table-header">Props</span>
      <span class="table-header">Description</span>
      <span class="table-header">Type</span>
      <span class="table-header">Default value</span>

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

      <span class="table-item">defaultSearchText</span>
      <span class="table-item">Default input value</span>
      <span class="table-item">String</span>
      <span class="table-item italic">empty string</span>
    </div>
    <br>
    <p class="font-bold">- Available slots</p>
    <div class="grid grid-cols-2 mt-3">
      <span class="table-header">Slot name</span>
      <span class="table-header">Description</span>

      <span class="table-item">icon</span>
      <span class="table-item">Replace the glass icon on the right</span>

      <span class="table-item">results</span>
      <span class="table-item">Replace the results block</span>
    </div>
    <br>
    <p class="font-bold">- Available events</p>
    <div class="grid grid-cols-2 mt-3">
      <span class="table-header">Event</span>
      <span class="table-header">Description</span>

      <span class="table-item">@selectItem</span>
      <span class="table-item">When a result is click, this event returns the result</span>

      <span class="table-item">@clearInput</span>
      <span class="table-item">This event is triggered when the "x" button is clicked or when the search text length is equals to 0</span>

      <span class="table-item">@onInput</span>
      <span class="table-item">Send the current input value after the delay defined in props</span>
    </div>
    <br>
    <p class="font-bold">- Examples</p>
    <p class="mt-2">1. Autocomplete with minimum props</p>
    <AutocompleteBasic></AutocompleteBasic>
    <p class="mt-2">2. Autocomplete with custom delay and limit</p>
    <AutocompleteCustom></AutocompleteCustom>
  </div>
</template>

<script>
import AutocompleteBasic from '../components/examples/autocomplete/AutocompleteBasic.vue'
import AutocompleteCustom from '../components/examples/autocomplete/AutocompleteCustom.vue'

export default {
  name: "AutocompleteView",
  components: {
    AutocompleteBasic,
    AutocompleteCustom
  }
}
</script>