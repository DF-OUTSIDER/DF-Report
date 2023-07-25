/*
 * @Author: outsider 515885633@qq.com
 * @LastEditors: outsider 515885633@qq.com
 * @FilePath: \DF-Report\src\packages\components\Informations\Mores\Descriptions\index.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { ConfigType, PackagesCategoryEnum, ChartFrameEnum } from '@/packages/index.d'
import { ChatCategoryEnum,ChatCategoryEnumName } from '../../index.d'

export const DescriptionsConfig: ConfigType = {
    key: 'Descriptions',
    chartKey: 'VDescriptions',
    conKey: 'VCDescriptions',
    title: '描述',
    category: ChatCategoryEnum.MORE,
    categoryName: ChatCategoryEnumName.MORE,
    package: PackagesCategoryEnum.INFORMATIONS,
    chartFrame: ChartFrameEnum.COMMON,
    image: 'text_static.png'
  }