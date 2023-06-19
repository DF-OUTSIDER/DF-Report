/*
 * @Author: outsider 515885633@qq.com
 * @LastEditors: outsider 515885633@qq.com
 * @FilePath: \DF-Report\src\api\path\project.d.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
export type ProjectItem = {
  /**
   * 项目 id
   */
  id: string
  /**
   * 项目名称
   */
  name: string
  /**
   * 项目状态:\
   * -1: 未发布\
   * 1: 已发布
   */
  status: number
  /**
   * 创建时间
   */
  createTime: string
  /**
   * 预览图片UUID码
   */
  preview: string
  previewAddress: string
  /**
   * 创建者 id
   */
  createUserId: string
  /**
   * 项目备注
   */
  remarks: string
}

export interface ProjectDetail extends ProjectItem {
  /**
   * 项目参数
   */
   content: string
}