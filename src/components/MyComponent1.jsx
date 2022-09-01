import './MyComponent1.css';
import { useState } from "react";

const MyComponent1 = () => {

    const [answer, setAnswer] = useState(false);
    console.log('answer ', answer);
    console.log('setAnswer', setAnswer);

    const showAnswer = () => {
        setAnswer(!answer);
    }

    return (
        <main>
            <div className="clsDiv1">
                <div className='clsDivReactIsSoGreat'><p>Why is React great?</p> <button onClick={showAnswer}>+</button></div>

                <hr />
                <p className="clsFastLearningCurve"
                    style={!answer ? { display: 'none' } : { display: 'block' }} >Fast Learning Curve</p>

            </div>

        </main >

    );
}

export default MyComponent1;