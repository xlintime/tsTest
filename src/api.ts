export interface Config{
hasMore:(res:any,params?:any)=>boolean,
getParams:(res?:any,time?:number)=>any,
dataAdaptor:(res:any)=>any[]

}
const unpaginate=(
  api:(param:any)=>Promise<any[]>,
  config:Config
):Promise<any[]>=>{

  return Promise.resolve([])
}