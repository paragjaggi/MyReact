import { memo } from "react";

const MemoExample = (props) => {
    console.log('~~~~~~~~~~~MemoComponent~~~~~~~~~~~~');
    return (
        <h1>MemoExample Rendered!!</h1>
    );
}

export default memo(MemoExample);