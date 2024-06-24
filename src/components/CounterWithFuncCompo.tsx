import ChildrenCounter from "./ChildrenCounter";


type TProps = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>
}


const CounterWithFuncCompo = ({ count, setCount }: TProps) => {

    return (
        <div>
            <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
            <ChildrenCounter counter={count} />
        </div>
    );
};

export default CounterWithFuncCompo;