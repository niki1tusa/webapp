
import { TrpcProvaider } from './lib/trpc'
const ideas = [
  {
      id: 1, name: 'text1', description: 'this is description with idea!'
  },
  {
      id: 2, name: 'text2', description: 'this is description with idea!'
  },
  {
      id: 3, name: 'text3', description: 'this is description with idea!'
  },
  {
      id: 4, name: 'text4', description: 'this is description with idea!'
  },
  {
      id: 5, name: 'text5', description: 'this is description with idea!'
  },
]
export function Data() {


  return (
    <div>
{ideas.map(item=>(
<div key={`${item}--${item.id}`}>
   <div>{item.name}</div>
  <div>{item.description}</div>
</div> 
))}
    </div>
  )
}

 export const App = () =>{
  return (
    <TrpcProvaider>
<Data/>
    </TrpcProvaider>
  )
}
