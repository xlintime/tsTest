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
type EventListenerParamsType = Parameters<typeof window.addEventListener>;
interface Person {
  name: string;
  age?: number;
  location?: string;
}
type k=keyof Person;


const  getProperty=<T,K extends keyof T>(obj:T,key:k):T[K]=>{
return obj[key]
}



const info:Person={
name:'1'
}
const b=getProperty(info,'name');
// const c=getProperty(info,'time')

type Ids = number[];
type Names = string[];

type Unpacked<T> = T extends (infer R)[] ? R : T;

type idType = Unpacked<Ids>; // idType 类型为 number
type nameType = Unpacked<Names>; // nameType 类型为string

type ParamType<T> = T extends (param: infer P) => any ? P : T;


const getAge=(age:number,name:string):string=>{
  return `${name}' age is ${age}`
}

type c=Parameters<typeof getAge>; // type c = [age: number, name: string]
type r=ReturnType<typeof getAge> //type r = string

enum ActiveType {
  Active,
  Inactive
}

type KeyOfType = keyof typeof ActiveType