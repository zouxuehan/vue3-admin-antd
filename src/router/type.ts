import { RouteRecordRaw } from 'vue-router'

interface RouteMeta {
  title: string
  icon?: string
  hidden?: boolean
}
// @ts-ignore
export interface MyRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  meta: RouteMeta
  children?: MyRouteRecordRaw[]
}
