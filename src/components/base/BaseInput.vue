<template>
  <n-input
  @input="(e: any) => emit('update:modelValue', e)"
  :type="type"
  :default-value="value"
  :placeholder="placeholder"
  :status="status"
  :disabled="disabled"
  :readonly="readonly"
  />
</template>

<script setup lang="ts">

//emits
const emit = defineEmits(['update:modelValue'])
//:modelValue (prop)
//@update:modelValue (event)

//props
withDefaults(defineProps<{
  value?: string;
  type?: string;
  placeholder?: string;
  status?: 'default' | 'success' | 'warning' | 'error';
  disabled?: boolean;
  readonly?: boolean;
}>(), {
  value: '',
  type: 'text',
  placeholder: 'Enter text here...',
  status: 'default',
  disabled: false,
  readonly: false
});

//properties

</script>
