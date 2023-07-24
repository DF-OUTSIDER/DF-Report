import { PublicConfigClass } from '@/packages/public'
import { CreateComponentType } from '@/packages/index.d'
import { DataTableConfig } from './index'
import cloneDeep from 'lodash/cloneDeep'
import dataJson from './data.json'

export const option = {
    // 数据
    dataset: dataJson
}

export default class Config extends PublicConfigClass implements CreateComponentType {
    public key = DataTableConfig.key
    public chartConfig = cloneDeep(DataTableConfig)
    public option = cloneDeep(option)
  }