<template>
  <el-dialog 
    v-model="dialogVisible" 
    draggable
    width="500" >
    <!-- header -->
    <template #header>
      <slot name="header">
        <h2>Please confirm!</h2>
      </slot>
    </template>

    <!-- body -->
    <slot name="body"> </slot>

    <!-- footer -->
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"> Confirm </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue'

//props
const props = withDefaults(
  defineProps<{
    isVisible: boolean
  }>(),
  {
    isVisible: false,
  },
)

const dialogVisible = shallowRef<boolean>(props.isVisible)

//methods
</script>

