<template>
  <div class="container mt-5">
    <h1>Vue JSON-LD Plugin</h1>
    <p>Vue JSON-LD Plugin is a Vue 3 plugin that allows you to add JSON-LD structured data to your Vue 3 components.</p>
    <p>Because typically a <code>script</code>-tag is not allowed inside a Vue component, this plugin provides a way to add JSON-LD structured data to your Vue components.</p>

    <h2>Example 1 - Render in Place</h2>
    <VueJsonLd :jsonLd="jsonLdExample1" />
    <code>
      &lt;JsonLd :jsonLd="jsonLdExample1" :head="false" /&gt;
    </code>
    <p>You won't see anything in the browser, but the JSON-LD structured data is added at its place.</p>

    <h2>Example 2 - Head</h2>
    <VueJsonLd :jsonLd="jsonLdExample2" :head="true" />
    <code>
      &lt;JsonLd :jsonLd="jsonLdExample1" :head="true" /&gt;
    </code>
    <p>You won't see anything either, but the JSON-LD structured data is added to the head of the document.</p>

    <h2>Example 3 - JSON+LD String as slot</h2>
    <VueJsonLd>
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "url": "http://www.example.com",
  "name": "This is also a corporation",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-123-456-1212",
    "contactType": "Customer service"
  }
}
    </VueJsonLd>
    <code><pre>
&lt;JsonLd&gt;
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "url": "http://www.example.com",
  "name": "This is also a corporation",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-123-456-1212",
    "contactType": "Customer service"
  }
}
&lt;/JsonLd&gt;
    </pre></code>
    <p>You also won't see anything in this example, but the JSON-LD structured data passed as a string is rendered in place.</p>

    <h2>Example 4 - JSON+LD String as slot placed in Head</h2>
    <VueJsonLd :head="true">
      {
      "@context": "https://schema.org",
      "@type": "Organization",
      "url": "http://www.example.com",
      "name": "This is the last corporation",
      "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-123-456-1212",
      "contactType": "Customer service"
      }
      }
    </VueJsonLd>
    <code><pre>
&lt;JsonLd&gt;
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "url": "http://www.example.com",
  "name": "This is the last corporation",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-123-456-1212",
    "contactType": "Customer service"
  }
}
&lt;/JsonLd&gt;
    </pre></code>
    <p>You also won't see anything in this example, but the JSON-LD structured data passed as a string is rendered in place.</p>
  </div>
</template>

<script setup>
import {ref} from "vue";
import VueJsonLd from "./components/VueJsonLd.ts";

const jsonLdExample1 = ref({
  "@context": "https://schema.org",
  "@type": "Organization",
  "url": "http://www.example.com",
  "name": "This is a corporation",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-123-456-1212",
    "contactType": "Customer service"
  }
});

const jsonLdExample2 = ref({
  "@context": "https://schema.org",
  "@type": "Organization",
  "url": "http://www.example.com",
  "name": "This is another Corporation",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-456-789-1212",
    "contactType": "Customer service"
  }
});
</script>
