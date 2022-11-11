import React from 'react';

interface props {
    title: string
}

const Title: React.FunctionComponent<props> = ({title}) => {
    return (
        <div className={'w-full flex flex-col justify-center items-center mb-9'}>
            <div className={'text-4xl mb-3 relative username'}>{title}</div>
        </div>
    )
};

export default Title