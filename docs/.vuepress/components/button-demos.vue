<template>
  <div>
    <i-button>默认按钮</i-button>
    <i-button icon="settings">默认按钮</i-button>
    <i-button :loading="true">默认按钮</i-button>
    <i-button disabled>默认按钮</i-button>
    <pre>
    <code> {{content}} </code>
  </pre>
  </div>

</template>

<script>
  import Button from '../../../src/Button'

  export default {
    components: {
      'i-button': Button,
    },
    data() {
      return {
        content: `
            <i-button>默认按钮</i-button>
            <i-button icon="settings">默认按钮</i-button>
            <i-button :loading="true">默认按钮</i-button>
            <i-button disabled>默认按钮</i-button>
        `,
      }
    }
  }

</script>