/*
 * @Author: outsider 515885633@qq.com
 * @LastEditors: outsider 515885633@qq.com
 * @FilePath: \DF-Report\src\api\axios.config.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { ModuleTypeEnum } from '@/enums/httpEnum'

// 接口白名单（免登录）
export const fetchAllowList = [
  // 登录
  `${ModuleTypeEnum.AUTH}/login`,
  // 获取 OSS 接口
  `${ModuleTypeEnum.AUTH}/loginOut`,
  // 预览获取数据
  `${ModuleTypeEnum.GOVIEW_PROJECT}/publishDetail`,
]

// 接口黑名单
export const fetchBlockList = []