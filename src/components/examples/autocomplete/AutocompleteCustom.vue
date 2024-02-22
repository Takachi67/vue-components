<template>
  <div class="grid grid-cols-2 gap-5">
    <div class="flex items-center">
<pre class="w-full">
<code class="hljs language-javascript rounded-lg border-orange-600 border-2">{{ `<template>
 <Autocomplete 
    ref="autocomplete"
    :results="formattedResults"
    @selectItem="selectItem"
    @clearInput="selectedElement = {}"
    @onInput="searchText = $event"
    inputClass="w-full rounded-lg border-2 border-success p-1 focus:border-error focus:outline-none"
    resultsClass="border-2 border-blue-600 rounded-lg w-full max-h-52 overflow-y-auto"
  ></Autocomplete>
</template>

<script>
import Autocomplete from 'Takachi67/vue-components'

export default {
  components: {
    Autocomplete
  },
  data() {
    return {
      searchText: '',
      selectedElement: {},
      elements: [
        { id: 1, name: "Lucas" },
        { id: 2, name: "John" },
        { id: 3, name: "Elias" },
        { id: 4, name: "Lisa" }
      ]
    }
  },
  methods: {
    selectItem(event) {
      this.selectedElement = event
      this.$refs.autocomplete.setText(event.name)
    }
  },
  computed: {
    formattedResults() {
      return this.elements.filter(el =>
        el.name.toLowerCase().includes(this.searchText.toLowerCase())
      )
    }
  }
}
</script>
` }}</code>
</pre>
    </div>
    <div>
      <Autocomplete 
        key="autocomplete"
        ref="autocomplete"
        :results="formattedResults"
        @selectItem="selectItem($event, 'autocomplete')"
        @clearInput="selectedElement = {}"
        @onInput="searchText = $event"
        inputClass="w-full rounded-lg border-2 border-success p-1 focus:border-error focus:outline-none"
        resultsClass="border-2 border-blue-600 rounded-lg w-full max-h-52 overflow-y-auto"
      ></Autocomplete>
    </div>
  </div>
</template>

<script>
import Autocomplete from '../../../components/Autocomplete.vue'

export default {
  name: "AutocompleteBasic",
  components: {
    Autocomplete
  },
  data() {
    return {
      searchText: '',
      customSearchText: '',
      selectedElement: {},
      elements: [
        { id: 1, name: "Lucas" },
        { id: 2, name: "John" },
        { id: 3, name: "Elias" },
        { id: 4, name: "Lisa" }
      ]
    }
  },
  methods: {
    selectItem(event, ref) {
      this.selectedElement = event
      this.$refs[ref].setText(event.name)
    }
  },
  computed: {
    formattedResults() {
      return this.elements.filter(el =>
        el.name.toLowerCase().includes(this.searchText.toLowerCase())
      )
    },
    customFormattedResults() {
      return this.elements.filter(el =>
        el.name.toLowerCase().includes(this.customSearchText.toLowerCase())
      )
    }
  }
}
</script>