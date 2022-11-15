import React from 'react';

interface props {
    title: string,
    describe?: string,
}

const Title: React.FunctionComponent<props> = ({title, describe}) => {
    return (
        <div className={'w-full flex flex-col justify-center items-center mb-9'}>
            <div className={'text-4xl relative username mb-1'}>{title}</div>
            {describe && <i className={'text-lg'}>{describe}</i>}
        </div>
    )
};

export default Title