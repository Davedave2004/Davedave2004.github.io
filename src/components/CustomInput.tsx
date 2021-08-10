import React, { useEffect, useState } from 'react';

interface customInputProps extends React.HTMLProps<HTMLInputElement> {
    regexType?: string;
    regExp?: RegExp;
}

export function CustomInput(props: customInputProps) {
    const [input, setInput] = useState('');
    const [regExp, setRegExp] = useState(/.?/);

    // Apply regex value if available from props
    useEffect(() => {
        const availableRegexTypes = {
            number: /^\d*$/,
        };
        
        type RegexName = keyof typeof availableRegexTypes;

        if (props.regExp) {
            console.log(props.regExp);
            setRegExp(props.regExp);
        } else if(props.regexType && props.regexType in availableRegexTypes) {
            setRegExp(availableRegexTypes[props.regexType as RegexName]);
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
    return <input 
        type="text" 
        value={input} 
        onChange={handleChange}
        {...safeProps}
    />
    
}

