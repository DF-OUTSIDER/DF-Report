import { toRefs } from 'vue'
import { CreateComponentType } from '@/packages/index.d'
import { useChartEditStore } from '@/store/modules/chartEditStore/chartEditStore'

// 获取类型
type ChartEditStoreType = typeof useChartEditStore

// Params 参数修改触发 api 更新图表请求
export const useChartInteract = (
  chartConfig: CreateComponentType,
  useChartEditStore: ChartEditStoreType,
  param: { [T: string]: any },
  interactEventOn: string
) => {
  const chartEditStore = useChartEditStore()
  const { interactEvents } = chartConfig.events
  const fnOnEvent = interactEvents.filter(item => {
    return item.interactOn === interactEventOn
  })

  if (fnOnEvent.length === 0) return
  fnOnEvent.forEach(item => {
    const index = chartEditStore.fetchTargetIndex(item.interactComponentId)
    if (index === -1) return
    const { Params, Header } = toRefs(chartEditStore.componentList[index].request.requestParams)
    Object.keys(item.interactFn).forEach(key => {
      if (Params.value[key]) {
        Params.value[key] = param[item.interactFn[key]]
      }
      if (Header.value[key]) {
        Header.value[key] = param[item.interactFn[key]]
      }
    })
  })
}

// 联动事件触发的 type 变更时，清除当前绑定内容
export const clearInteractEvent = (chartConfig: CreateComponentType) => {

}
