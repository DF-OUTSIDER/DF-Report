<!--
 * @Author: outsider 515885633@qq.com
 * @LastEditors: outsider 515885633@qq.com
 * @FilePath: \DF-Report\src\packages\components\Informations\Mores\Descriptions\index.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <n-descriptions label-placement="top" bordered :column="6">
      <n-descriptions-item>
        <template #label>
          早餐
        </template>
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="早午餐">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="午餐">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="晚餐">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="正餐">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="夜宵">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="苹果">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="苹果" :span="2">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="苹果" :span="3">
        苹果
      </n-descriptions-item>
    </n-descriptions>
  </template>
  
  <script setup lang="ts">
  import { CreateComponentType } from '@/packages/index.d'
  import { PropType, reactive, toRefs } from 'vue';

    const props = defineProps({
    chartConfig: {
        type: Object as PropType<CreateComponentType>,
        required: true
    }
    })

    const { w, h } = toRefs(props.chartConfig.attr)
    
    const { rowNum, unit, color, textColor, borderColor, indexFontSize, leftFontSize, rightFontSize } = toRefs(
      props.chartConfig.option
    )

    const status = reactive({
      mergedConfig: props.chartConfig.option,
      rowsData: [],
      animationIndex: 0,
      animationHandler: 0,
      updater: 0
    })
  </script>