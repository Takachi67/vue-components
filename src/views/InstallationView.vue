<template>
    <div class="mt-5 pt-3 border-t">
        <h2 class="text-xl font-medium text-orange-700 text-center">Installation</h2>
        <div class="mt-3">
            <p>You can install the package using <span class="font-bold">npm</span> or <span class="font-bold">yarn</span></p>
            <br>
            <h3>- Using <span class="font-bold">npm</span></h3>
            <div class="bg-slate-100 rounded-md border p-1">
                <span class="keyword">npm</span>
                <span class="ml-1">install takachi67/vue-components</span>
            </div>
            <br>
            <h3>- Using <span class="font-bold">yarn</span></h3>
            <div class="bg-slate-100 rounded-md border p-1">
                <span class="keyword">yarn</span>
                <span class="ml-1">add takachi67/vue-components</span>
            </div>
            <br>
            <p>Now you can import any component you need in your project</p>
            <div class="bg-slate-100 rounded-md border p-1">
<pre>
<span class="tag">&lt;template&gt;</span>
    <span class="component">&lt;Autocomplete&gt;&lt;/Autocomplete&gt;</span>
<span class="tag">&lt;/template&gt;</span>

<span class="tag">&lt;script&gt;</span>
<span class="keyword">import</span><span class="ml-1">Autocomplete</span><span class="ml-1 keyword">from</span><span class="ml-1 string">"vue-components"</span>

<span><span class="keyword">export default</span> {</span>
    <span>components: {</span>
        <span class="component">Autocomplete</span>
    <span>},</span>
    <span>...</span>
<span>}</span>
<span class="tag">&lt;/script&gt;</span>
</pre>     
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "InstallationView"
}
</script>