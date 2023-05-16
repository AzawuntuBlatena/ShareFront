import { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'
import Layout from '../shareholder'
import Head from 'next/head'

const socket = io('http://localhost:3001')

export default function ChatPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const [users, setUsers] = useState({})

  const messagesEndRef = useRef(null)

  useEffect(() => {
    const email = prompt('What is your email address?')
    setEmail(email)
    socket.emit('join', email)

    socket.on('user-joined', (email) => {
      setUsers(users => ({ ...users, [email]: true }))
    })

    socket.on('user-left', (email) => {
      setUsers(users => {
        const newUsers = { ...users }
        delete newUsers[email]
        return newUsers
      })
    })

    socket.on('message', ({ email, message }) => {
      setIsTyping(false)
      setMessages(messages => [...messages, { email, message }])
    })

    return () => {
      socket.emit('leave')
      socket.disconnect()
    }
  }, [])

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (message) {
      socket.emit('message', message)
      setMessage('')
    }
  }

  const handleTyping = (event) => {
    if (event.target.value) {
      setIsTyping(true)
    } else {
      setIsTyping(false)
    }
    setMessage(event.target.value)
  }

  return (
    
    <div className="max-w-lg mx-auto my-8 px-4">
      <Head>
        <title>Chat with Admin</title>
      </Head>
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
        <div className="bg-gray-100 px-4 py-3 rounded-t-lg">
          <h1 className="text-lg font-medium text-gray-700">Chat with Admin</h1>
        </div>
        <div className="p-4 h-80 overflow-y-scroll">
          {messages.map(({ email, message }, index) => (
            <div key={index}>
              <p className="font-medium text-gray-700">{email}</p>
              <p className="text-gray-600">{message}</p>
            </div>
          ))}
          {isTyping && (
            <div>
              <p className="italic text-gray-600">Someone is typing...</p>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center border-t border-gray-200 px-4 py-3">
            <input type="text" className="flex-grow border border-gray-300 rounded-lg py-2 px-4 mr-2" value={message} onChange={handleTyping} />
            <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg px-4 py-2">Send</button>
          </div>
        </form>
      </div>
      <div className="mt-4">
        <p className="font-medium text-gray-700">Users in chat</p>
        <div className="flex flex-wrap mt-2">
          {Object.keys(users).map((email, index) => (
            <div key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg mr-2 mb-2">{email}</div>
          ))}
        </div>
      </div>
    </div>
    
  )
}