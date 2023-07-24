/*
 * @Author: outsider 515885633@qq.com
 * @LastEditors: outsider 515885633@qq.com
 * @FilePath: \DF-Report\src\packages\components\Tables\Tables\DataTable\index.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { ConfigType, PackagesCategoryEnum, ChartFrameEnum } from '@/packages/index.d'
import { ChatCategoryEnum, ChatCategoryEnumName } from '../../index.d'

export const DataTableConfig: ConfigType = {
    key: 'DataTable',
    chartKey: 'VDataTable',
    conKey: 'VCDataTable',
    title: '数据表',
    category: ChatCategoryEnum.TABLE,
    categoryName: ChatCategoryEnumName.TABLE,
    package: PackagesCategoryEnum.TABLES,
    chartFrame: ChartFrameEnum.COMMON,
    image: 'tables_list.png'
  }