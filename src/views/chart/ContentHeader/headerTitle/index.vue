<!--
 * @Author: outsider 515885633@qq.com
 * @LastEditors: outsider 515885633@qq.com
 * @FilePath: \DF-Report\src\views\chart\ContentHeader\headerTitle\index.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <n-space>
    <n-icon size="20" :depth="3">
      <fish-icon></fish-icon>
    </n-icon>
    <n-text @click="handleFocus">
      工作空间 -
      <n-button v-show="!focus" secondary size="tiny">
        <span class="title">
          {{ comTitle }}
        </span>
      </n-button>
    </n-text>

    <n-input
      v-show="focus"
      ref="inputInstRef"
      size="small"
      type="text"
      maxlength="16"
      show-count
      placeholder="请输入项目名称"
      v-model:value.trim="title"
      
      @blur="handleBlur"
    ></n-input>
  </n-space>
</template>
<!-- @keyup.enter="handleBlur" -->
<script setup lang="ts">
import { ref, nextTick, computed, watchEffect } from 'vue'
import { ResultEnum } from '@/enums/httpEnum'
import { fetchRouteParamsLocation, httpErrorHandle, setTitle, JSONStringify } from '@/utils'
import { useChartEditStore } from '@/store/modules/chartEditStore/chartEditStore'
import { ProjectInfoEnum, EditCanvasConfigEnum } from '@/store/modules/chartEditStore/chartEditStore.d'
import { updateProjectApi } from '@/api/path'
import { useSync } from '../../hooks/useSync.hook'
import { icon } from '@/plugins'

const chartEditStore = useChartEditStore()
const { dataSyncUpdate, updateProject } = useSync()
const { FishIcon } = icon.ionicons5

const focus = ref<boolean>(false)
const inputInstRef = ref(null)

const title = ref<string>(fetchRouteParamsLocation())
title.value = title.value.replace(/\s/g, '') as string

watchEffect(() => {
  title.value = chartEditStore.getProjectInfo.projectName || ''
  title.value = title.value.replace(/\s/g, '') as string
})

const comTitle = computed(() => {
  const newTitle = title.value.length ? title.value : '新项目'
  setTitle(`工作空间-${newTitle}`)
  chartEditStore.setEditCanvasConfig(EditCanvasConfigEnum.PROJECT_NAME, newTitle)
  return newTitle
})

const handleFocus = () => {
  focus.value = true
  nextTick(() => {
    inputInstRef.value && (inputInstRef.value as any).focus()
  })
}

// 保存项目名称
const handleBlur = async () => {
  focus.value = false
  const res = await updateProject({
      id: fetchRouteParamsLocation(),
      name: title.value,
      preview: chartEditStore.getProjectInfo.preview,
      content: JSONStringify(chartEditStore.getStorageInfo || {}),
      status: chartEditStore.getProjectInfo.release ? 1 : -1
    })

  if (res && res.code === ResultEnum.SUCCESS) {
    chartEditStore.setProjectInfo(ProjectInfoEnum.PROJECT_NAME, title.value || '')
    window['$message'].success('项目名称更新完成')
       
  } else {
    httpErrorHandle()
  }
}

</script>
<style lang="scss" scoped>
.title {
  padding-left: 5px;
  padding-right: 5px;
  font-size: 15px;
}
</style>
