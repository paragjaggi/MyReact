import { useEffect, useMemo, useRef, useState } from "react"

const FunctionalHook = () => {
    const [number, setNumber] = useState(0.0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const increaseCount1 = () => {
        setCount1(count1 + 1);
    }
    const increaseCount2 = () => {
        setCount2(count2 + 1);
    }
    const counter = useRef(0);
    useEffect( ()=> {
        alert("Numer generated");
        counter.current = counter.current + 1;
    }, [number]);

    const isEven = useMemo(() => {
        let i = 0;
        while(i < 100000000) i++;
        return count1 % 2 == 0;
    }, [count1]);
    return (
        <div>
            <h1>Random number : {number}</h1>
            <h1>Counter: {counter.current}</h1>
            <br />
            <button onClick={() => { setNumber(Math.random()) }} class="btn btn-primary">Generate numbers</button>
            <h1>{isEven ? "Even" : "Odd"}</h1>
            <button class="btn btn-secondary" onClick={increaseCount1}>Count1 = {count1}</button>
            <button class="btn btn-secondary" onClick={increaseCount2}>Count2 = {count2}</button>
        </div>
    );
}

export default FunctionalHook;