import { Loader } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import './Loader.css';
import React, { useState } from "react";

export const DefualtLoaderBar = () => {

    const [isLoading, setIsLoading] = useState(false);

    const toggleLoader = () => {
        setIsLoading(prevLoading => !prevLoading);
    }

    const startLoader = () => {
        setIsLoading(true);
    }

    const stopLoader = () => {
        setIsLoading(false);
    }

// <Loader size="large" />

    return (
        <div className="loaderDiv">
            {isLoading && (
                <>
                    <Loader className="loader" variation="linear" />
                </>
            )}
                <button className="toggleButton" onClick={toggleLoader}>Toggle loader</button>
                <button className="startButton" onClick={startLoader}>Start loader</button>
                <button className="stopButton" onClick={stopLoader}>Stop loader</button>
        </div>
    );
};

export default DefualtLoaderBar;