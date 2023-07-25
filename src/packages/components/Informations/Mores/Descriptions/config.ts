/*
 * @Author: outsider 515885633@qq.com
 * @LastEditors: outsider 515885633@qq.com
 * @FilePath: \DF-Report\src\packages\components\Informations\Mores\Descriptions\config.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { PublicConfigClass } from '@/packages/public'
import { CreateComponentType } from '@/packages/index.d'
import { DescriptionsConfig } from '.'
import cloneDeep from 'lodash/cloneDeep'
import dataJson from './data.json'

export const option = {
    // 数据
    dataset: dataJson
}

export default class Config extends PublicConfigClass implements CreateComponentType {
    public key = DescriptionsConfig.key
    public chartConfig = cloneDeep(DescriptionsConfig)
    public option = cloneDeep(option)
  }