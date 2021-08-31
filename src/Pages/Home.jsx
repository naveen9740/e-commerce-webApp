import React, { useState } from "react";
let Home = () => {
    let [count, setCount] = useState(0)
    return <div style={{ position: 'absolute', top: '100px' }}>
        <h2>This is Home Page</h2>
        <button onClick={() => setCount(count + 1)}>count</button>
        <h2>{count}</h2>
    </div>
}
export default Home;
