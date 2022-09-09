// @ts-nocheck
import React from 'react';
type PropsTypes = {
    title: string;
    data: { [key: string]: string };
    addLastUnderline: boolean;
    lastFontBold: boolean;
};

const DecisionDetails = (props: PropsTypes) => {
    return (
        <div className="mt-10 flex flex-col w-full p-8 border-slate200 border-2 rounded-lg">
            <h3 className="mb-4 font-heading text-[20px] text-blue900">{props.title}</h3>

            {Object.entries(props.data).map((item: string[], index: number) => (
                <div
                    className={
                        Object.entries(props.data).length - 1 === index
                            ? `py-2 text-md flex w-full justify-between items-center ${
                                  props.addLastUnderline && 'border-b border-slate200'
                              } ${props.lastFontBold && 'font-bold'}`
                            : `py-2 text-md flex w-full justify-between items-center border-b border-slate200`
                    }
                >
                    <p className="w-1/2 text-slate600">{item[0]}</p>
                    <h3 className="w-1/3 text-right text-blue900 text-md">{item[1]}</h3>
                </div>
            ))}
        </div>
    );
};

export default DecisionDetails;
