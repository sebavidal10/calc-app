import React, { useState } from 'react'
import words from 'lodash.words'

import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'

import './App.css'

const App = () => {

    const [stack, setStack] = useState("")

    const items = words(stack, /[^-^+^*^/]+/g)
    const value = items.length > 0 ? items[items.length - 1] : "0"
    return (
        <main className='react-calculator'>
            <Result value={value} />
            <Numbers onClickNumber={number => {
                console.log("Click en number", number)
                setStack(`${stack}${number}`)
            }} />
            <Functions 
                onContentClear={() => 
                    setStack('')
                }
                onDelete={() => {
                    if (stack.length > 0){
                        const newStack = stack.substring(0, stack.length - 1)
                        setStack(newStack)
                    }
                }}
            />
            <MathOperations 
                onClickOperation={operation => 
                    setStack(`${stack}${operation}`)
                }
                onClickEqual={equal => 
                    setStack(eval(stack).toString())
                } 
            />
        </main>)
}

// exportación
export default App