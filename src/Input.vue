<template>
  <div class="input-wrapper" :class="{error}">
    <label>
      <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
             @change="$emit('change',$event.target.value)"
             @input="$emit('input', $event.target.value)"
             @focus="$emit('focus', $event.target.value)"
             @blur="$emit('blur', $event.target.value)"
      >
      <template v-if="error">
        <Icon class="icon-error" icon-name="error"></Icon>
        <span class="error-message">{{error}}</span>
      </template>
    </label>
  </div>

</template>

<script>
  import Icon from './Icon'

  export default {
    name: 'InitInput',
    components: {Icon},
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 12px;
  $border-shadow-color: rgba(0, 0, 0, 0.5);
  $red: #F1453D;
  .input-wrapper {font-size: $font-size; display: inline-block;align-items: center;

    > label {
      > :not(:last-child) {margin-right: .5em;}

      > input { height: $height; border: 1px solid $border-color; border-radius: 4px; padding: 0 8px; font-size: inherit;

        &:hover { border-color: $border-color-hover; }

        &:focus { box-shadow: inset 0 1px 3px $border-shadow-color; outline: none; }

        &[disabled], &[readonly] { border-color: #bbb; color: #bbb; cursor: not-allowed; }
      }
    }

    &.error {
      > label {
        > input { border-color: $red; }

        .icon-error { fill: $red;}

        .error-message { color: $red; }
      }
    }
  }
</style>