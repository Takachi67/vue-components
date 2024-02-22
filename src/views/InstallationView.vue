<template>
    <div class="mt-5 pt-3 border-t">
        <h2 class="text-xl font-medium text-orange-700 text-center">Installation</h2>
        <div class="mt-3">
            <p>You can install the package using <span class="font-bold">npm</span> or <span class="font-bold">yarn</span></p>
            <br>
            <h3>- Using <span class="font-bold">npm</span></h3>
<pre class="w-full">
<code class="hljs language-javascript rounded-lg border-orange-600 border-2">npm install takachi67/vue-components</code>
</pre>
            <h3>- Using <span class="font-bold">yarn</span></h3>
<pre class="w-full">
<code class="hljs language-javascript rounded-lg border-orange-600 border-2">yarn add takachi67/vue-components</code>
</pre>
            <p>Now you can import any component you need in your project</p>
<pre class="w-full">
<code class="hljs language-javascript rounded-lg border-orange-600 border-2">&lt;template>
  &lt;Autocomplete>&lt;/Autocomplete>
&lt;/template>

&lt;script>
import Autocomplete from "Takachi67/vue-components"

export default {
  components: {
    Autocomplete
  },
  ...
}
&lt;/script>
</code>
</pre>
        </div>
    </div>
</template>

<script>
export default {
    name: "InstallationView"
}
</script>