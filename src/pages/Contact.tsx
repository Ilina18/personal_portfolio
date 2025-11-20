import React, { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    setStatus('Sending...')

    try {
      const response = await fetch('https://formspree.io/f/your_form_id', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      })
      if (response.ok) {
        setStatus('Message sent! ✅')
        form.reset()
      } else {
        setStatus('Failed to send ❌')
      }
    } catch {
      setStatus('Error sending form ❌')
    }
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Get in touch</h1>
      <p className="text-gray-700 mb-4">Feel free to reach out via this form or connect on LinkedIn / GitHub.</p>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
        <label className="block mb-2 text-sm">Your name</label>
        <input name="name" className="w-full mb-3 p-2 border rounded" placeholder="Your name" required />

        <label className="block mb-2 text-sm">Your email</label>
        <input name="email" type="email" className="w-full mb-3 p-2 border rounded" placeholder="you@domain.com" required />

        <label className="block mb-2 text-sm">Message</label>
        <textarea name="message" className="w-full mb-3 p-2 border rounded" rows={5} placeholder="Hi! I'd like to work with you..." required />

        <div className="flex items-center justify-between">
          <button type="submit" className="px-4 py-2 rounded bg-primary text-white">Send message</button>
          <span className="text-sm text-gray-500">{status}</span>
        </div>
      </form>
    </div>
  )
}
