'use client'

import { useState } from "react"

interface Props {
  data: string | false
}

export default function Motd({ data }: Props) {
  const [showForm, setShowForm] = useState(!data)
  const [message, setMessage] = useState(data || "")

  function MessageForm({ data }: Props) {
    const [error, setError] = useState(false)
    const [input, setInput] = useState(data)

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        if (input.toString().length > 0 && input) {
          setMessage(input)
          setShowForm(false)
        } else
          setError(true)
      }
    }

    return (
      <>
        <input 
          value={input || ''}
          onChange={(e) => {
            setError(false)
            setInput(e.target.value)
          }}
          onKeyDown={handleKeyDown}
          className="py-2 focus:outline-none border-b-2 border-white text-white bg-transparent"
        />
        {error && (<p className="text-red-500">Message cannot be empty</p>)}
      </>
    )
  }

  function MessageDisplay() {
    return <p className="text-white text-4xl" onDoubleClick={() => setShowForm(true)}>{message}</p>
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl text-white">{(showForm) ? "What is your main focus for today?" : "Today"}</h1>
      {(showForm) 
        ? <MessageForm data={message}/>
        : <MessageDisplay />
      }
    </div>
  ) 
}