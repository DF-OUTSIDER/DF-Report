import { ref, reactive } from 'vue'
import { goDialog, httpErrorHandle, JSONStringify } from '@/utils'
import { DialogEnum } from '@/enums/pluginEnum'
import { projectListApi, deleteProjectApi, changeProjectReleaseApi } from '@/api/path'
import { Chartype, ChartList } from '../../../index.d'
import { ResultEnum } from '@/enums/httpEnum'
import { useChartEditStore } from '@/store/modules/chartEditStore/chartEditStore'
import { ProjectInfoEnum } from '@/store/modules/chartEditStore/chartEditStore.d'
import { useSync } from '@/views/chart/hooks/useSync.hook'

// 数据初始化
export const useDataListInit = () => {

  const chartEditStore = useChartEditStore()
  const { dataSyncUpdate, updateProject } = useSync()

  const loading = ref(true)

  const paginat = reactive({
    // 当前页数
    page: 1,
    // 每页值
    limit: 12,
    // 总数
    count: 10
  })

  const list = ref<ChartList>([])

  // 数据请求
  const fetchList = async () => {
    loading.value = true
    const res = await projectListApi({
      pageIndex: paginat.page,
      pageSize: paginat.limit
    })
    if (res && res.data) {
      const { data } = res as any // 这里的count与data平级，不在Response结构中
      paginat.count = data.total
      list.value = res.data.list.map(e => {
        // todo preview有效
        const { id, name, state, createTime, preview, previewAddress, createUserId } = e
        return {
          id: id,
          title: name,
          createId: createUserId,
          time: createTime,
          preview: preview,
          image: previewAddress,
          release: state !== -1
        }
      })
      setTimeout(() => {
        loading.value = false
      }, 500)
      return
    }
    httpErrorHandle()
  }

  // 修改页数
  const changePage = (_page: number) => {
    paginat.page = _page
    fetchList()
  }

  // 修改大小
  const changeSize = (_size: number) => {
    paginat.limit = _size
    fetchList()
  }

  // 删除处理
  const deleteHandle = (cardData: Chartype) => {
    goDialog({
      type: DialogEnum.DELETE,
      promise: true,
      onPositiveCallback: () =>
        new Promise(res => {
          res(
            deleteProjectApi({
              ids: [cardData.id]
            })
          )
        }),
      promiseResCallback: (res: any) => {
        if (res.code === ResultEnum.SUCCESS) {
          window['$message'].success(window['$t']('global.r_delete_success'))
          fetchList()
          return
        }
        httpErrorHandle()
      }
    })
  }

  // 发布处理
  const releaseHandle = async (cardData: Chartype, index: number) => {
    const { id, release } = cardData
    
    // dataSyncUpdate()
    const res = await updateProject({
      projectId: id as string,
      name: chartEditStore.getProjectInfo.projectName,
      preview: chartEditStore.getProjectInfo.preview,
      content: JSONStringify(chartEditStore.getStorageInfo || {}),
      status: !release ? 1 : -1
    })
    // const res = await changeProjectReleaseApi({
    //   id: id,
    //   // [-1未发布, 1发布]
    //   status: !release ? 1 : -1
    // })
    if (res && res.code === ResultEnum.SUCCESS) {
      chartEditStore.setProjectInfo(ProjectInfoEnum.RELEASE, res.data?.preview)
      list.value = []
      fetchList()
      // 发布 -> 未发布
      if (release) {
        window['$message'].success(window['$t']('global.r_unpublish_success'))
        return
      }
      // 未发布 -> 发布
      window['$message'].success(window['$t']('global.r_publish_success'))
      return
    }
    httpErrorHandle()
  }

  // 立即请求
  fetchList()

  return {
    loading,
    paginat,
    list,
    fetchList,
    releaseHandle,
    changeSize,
    changePage,
    deleteHandle
  }
}


