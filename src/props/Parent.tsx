import { Child, ChildRFC } from './Child';

export const Parent = () =>{
    return (
       <> <Child color='green' onClick={()=> console.log('Child clicked')}/>
    <ChildRFC color='blue'/></>
    );
};

export default Parent;