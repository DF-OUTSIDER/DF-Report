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
      <n-descriptions-item v-for="(value, key) in data">
        <template #label>
          {{ value.label }}
        </template>
        {{ value.value }}
      </n-descriptions-item>
    </n-descriptions>
  </template>
  
  <script setup lang="ts">
  import { CreateComponentType } from '@/packages/index.d'
  import { onMounted, PropType, reactive, ref, toRefs, watch } from 'vue';

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

  const data = ref({})

  const calcData = () => {
    let { dataset, rowNum, sort } = status.mergedConfig
    data.value = dataset
  }

  const onRestart = async () => {
  try {
    if (!status.mergedConfig) return
    //stopAnimation()
    calcData()

  } catch (error) {
    console.log(error)
  }
}

  watch(
    () => w.value,
    () => {
      onRestart()
    }
  )

  watch(
    () => h.value,
    () => {
      onRestart()
    }
  )

  // 数据更新
  watch(
    () => props.chartConfig.option,
    () => {
      onRestart()
    },
    { deep: true }
  )

  onMounted(() => {
    onRestart()
  })
  </script>