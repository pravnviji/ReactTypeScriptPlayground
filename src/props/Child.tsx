
interface ChildProps {
    color: string;
    onClick?: () => void;

}

export const Child = ({color,onClick}: ChildProps) => {
    return (
        <><h2> Child {color}</h2>
        <button onClick={onClick}>Click me</button></>
    );
}


export const ChildRFC: React.FC<ChildProps> = ({color}) =>{
    return(
        <h1> ChildRFC {color}</h1>
    );
}