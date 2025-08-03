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
import type { InputStatus } from '@/types/InputType';

//types props
type InputType = {
  value: string;
  type: string;
  placeholder: string;
  status: InputStatus;
  disabled: boolean;
  readonly: boolean;
}
//emits
const emit = defineEmits(['update:modelValue'])
//:modelValue (prop)
//@update:modelValue (event)

//props
withDefaults(defineProps<Partial<InputType>>(), {
  value: '',
  type: 'text',
  placeholder: 'Enter text here...',
  status: 'default',
  disabled: false,
  readonly: false
});

//properties

</script>
