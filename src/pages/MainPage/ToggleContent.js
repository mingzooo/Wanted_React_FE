import React, { useState } from "react";

const ToggleContent = () => {
    const [isShow, setIsShow] = useState(false);

    function toggle(){
        setIsShow(!isShowing);
    }

    return (
        <>
            {toggle(show)}
            {isShow && content(hide)}
        </>
    );
};

export default ToggleContent;