<template>
  <div class="grid grid-cols-2 gap-5">
    <div class="flex items-center">
<pre class="w-full">
<code class="hljs language-javascript rounded-lg border-orange-600 border-2">{{ `<template>
 <Collapse
    :default-is-open="true"
    :show-arrow="false"
  >
    <template v-slot:title>I'm a custom title</template>
    <template v-slot:content>This is a custom content using slots</template>
  </Collapse>
</template>

<script>
import Collapse from '@takachi67/vue-components'

export default {
  components: {
    Collapse
  }
}
</script>
` }}</code>
</pre>
    </div>
    <div>
      <Collapse
        :default-is-open="true"
        :show-arrow="false"
      >
        <template v-slot:title>I'm a custom title</template>
        <template v-slot:content>This is a custom content using slots</template>
      </Collapse>
    </div>
  </div>
</template>

<script>
import Collapse from '../../../components/Collapse.vue'

export default {
  name: "CollapseOpen",
  components: {
    Collapse
  }
}
</script>