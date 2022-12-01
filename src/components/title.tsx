import React from 'react';

interface props {
    value: any
}

const Title: React.FunctionComponent<props> = ({value}) => {
    return (
        <div className={'w-full flex flex-col justify-center items-center mb-6'}>
            <div className={'text-4xl relative username mb-1'}>{`"${value?.classify_title}"`}</div>
            {value?.classify_describe && <i className={'text-lg'}>{value?.classify_describe}</i>}
        </div>
    )
};

export default Title