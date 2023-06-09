/*
 * @Author: outsider 515885633@qq.com
 * @LastEditors: outsider 515885633@qq.com
 * @FilePath: \DF-Report\src\api\path\project.api.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { http } from '@/api/http'
import { httpErrorHandle } from '@/utils'
import { ContentTypeEnum, RequestHttpEnum, ModuleTypeEnum } from '@/enums/httpEnum'
import { ProjectItem, ProjectDetail } from './project'

// * 项目列表
export const projectListApi = async (data: object) => {
  try {
    const res = await http(RequestHttpEnum.GET)(`${ModuleTypeEnum.GOVIEW_PROJECT}/list`, data)
    return res
  } catch {
    httpErrorHandle()
  }
}

// * 新增项目
export const createProjectApi = async (data: object) => {
  try {
    const res = await http(RequestHttpEnum.POST)<{
      /**
       * 项目id
       */
      id: number
    }>(`${ModuleTypeEnum.GOVIEW_PROJECT}/create`, data)
    return res
  } catch {
    httpErrorHandle()
  }
}

// * 获取项目
export const fetchProjectApi = async (data: object) => {
  try {
    const res = await http(RequestHttpEnum.GET)<ProjectDetail>(`${ModuleTypeEnum.GOVIEW_PROJECT}/detail`, data)
    return res
  } catch {
    httpErrorHandle()
  }
}

// * 获取发布项目数据
export const getPublishProjectApi = async (data: object) => {
  try {
    const res = await http(RequestHttpEnum.GET)<ProjectDetail>(`${ModuleTypeEnum.GOVIEW_PROJECT}/publishDetail`, data)
    return res
  } catch {
    httpErrorHandle()
  }
}

// * 保存项目 , ContentTypeEnum.FORM_URLENCODED
export const saveProjectApi = async (data: object) => {
  try {
    const res = await http(RequestHttpEnum.POST)(
      `${ModuleTypeEnum.GOVIEW_PROJECT}/save`,
      data
    )
    return res
  } catch {
    httpErrorHandle()
  }
}

// * 修改项目基础信息
export const updateProjectApi = async (data: object) => {
  try {
    const res = await http(RequestHttpEnum.POST)(`${ModuleTypeEnum.GOVIEW_PROJECT}/save`, data)
    return res
  } catch {
    httpErrorHandle()
  }
}

// * 修改项目发布状态
export const editStatusProjectApi = async (data: object) => {
  try {
    const res = await http(RequestHttpEnum.POST)(`${ModuleTypeEnum.GOVIEW_PROJECT}/editStatus`, data)
    return res
  } catch {
    httpErrorHandle()
  }
}

// * 删除项目
export const deleteProjectApi = async (data: object) => {
  try {
    const res = await http(RequestHttpEnum.POST)(`${ModuleTypeEnum.GOVIEW_PROJECT}/delete`, data)
    return res
  } catch {
    httpErrorHandle()
  }
}

// * 修改发布状态 [-1未发布,1发布]
export const changeProjectReleaseApi = async (data: object) => {
  try {
    const res = await http(RequestHttpEnum.POST)(`${ModuleTypeEnum.GOVIEW_PROJECT}/save`, data)
    return res
  } catch {
    httpErrorHandle()
  }
}

// * 上传文件
export const uploadFile = async (data: object) => {
  try {
    const res = await http(RequestHttpEnum.POST)<{
      code: string,
      name: string, 
      url: string
    }>(`${ModuleTypeEnum.UPLOAD_FILE}/upload`, data, ContentTypeEnum.FORM_DATA)
    return res
  } catch {
    httpErrorHandle()
  }
}
