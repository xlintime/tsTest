const getName=(name:string):string=>{
  console.log("122")
  return name+'hi'
}

type EventListenerParamsType = Parameters<typeof window.addEventListener>;

type a=ReturnType<typeof getName>
const b:a='123';