import React, { useEffect, useState, useRef } from 'react';

interface customInputProps extends React.HTMLProps<HTMLInputElement> {
    regexType?: string;
    regExp?: RegExp;
}

export function CustomInput(props: customInputProps) {
    const [input, setInput] = useState('');
    const [regExp, setRegExp] = useState(/.?/);
    const refContainer = useRef<HTMLHeadingElement>(null);

    // Apply regex value if available from props
    useEffect(() => {
        const availableRegexTypes = {
            number: /^\d*$/,
        };
        
        type RegexName = keyof typeof availableRegexTypes;

        if (props.regExp) {
            setRegExp(props.regExp);
            if (refContainer.current) refContainer.current.textContent = `I am using your regex ${props.regExp.toString()}` ;
        } else if(props.regexType && props.regexType in availableRegexTypes) {
            setRegExp(availableRegexTypes[props.regexType as RegexName]);
            if (refContainer.current) refContainer.current.textContent = `I am using type ${props.regexType}`;
        }
    }, [props.regexType, props.regExp])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const {value} = e.target;
        
        if (regExp.test(value)) 
        {
            setInput(value);
        }
    }

    // Do not set attributes that might produce conflict
    const {regexType, regExp : customRegExp, ...safeProps} = props;
    return (
        <div>
            <h1 ref={refContainer}>I am currently using the default</h1>
            <input 
                type="text" 
                value={input} 
                onChange={handleChange}
                {...safeProps}
            />
        </div>
    )
}

