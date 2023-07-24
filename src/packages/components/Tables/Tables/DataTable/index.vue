<!--
 * @Author: outsider 515885633@qq.com
 * @LastEditors: outsider 515885633@qq.com
 * @FilePath: \DF-Report\src\packages\components\Tables\Tables\DataTable\index.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <n-data-table :columns="columns" :data="data" />
</template>

<script setup lang="ts">
import { onMounted, PropType, reactive, ref, toRefs, watch } from 'vue'
import { NButton, useMessage } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
import { CreateComponentType } from '@/packages/index.d'

const message = useMessage()

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

type Song = {
  no: number
  title: string
  length: string
}

const createColumns = () => {
  let { dataset, rowNum, sort } = status.mergedConfig
  return dataset.columns
}

const data = ref([])
const columns =  ref(createColumns())

const calcRowsData = () => {
  let { dataset, rowNum, sort } = status.mergedConfig
  data.value = dataset.data
}

const calcData = () => {
  // mergeConfig()
  // calcHeaderData()
  columns.value = createColumns()
  calcRowsData()
  // calcWidths()
  // calcHeights()
  // calcAligns()
  // animation(true)
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