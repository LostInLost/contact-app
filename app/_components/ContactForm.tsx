"use client";

import { SyntheticEvent, useState } from "react";

export default function ContactForm() {
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('');

    const handleSubmit = async(e: SyntheticEvent) => {
        e.preventDefault()

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullname: fullname,
                email: email,
                message: message
            })
        })

        if (res.ok) {
            const {data} = await res.json() 
            console.log(data)
        }

    }
  return (
    <>
      <div className="col-span-2">
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 mt-5">
            <div>
              <label htmlFor="">Full Name</label>
              <input type="text" value={fullname} onChange={(e) => setFullName(e.target.value)} className="transition w-full p-2 outline outline-1 outline-slate-700 rounded focus:shadow-md focus:outline-blue-400" />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="transition w-full p-2 outline outline-1 outline-slate-700 rounded focus:shadow-md focus:outline-blue-400" />
            </div>
            <div>
              <label htmlFor="">Your Message</label>
              <textarea name="" value={message} onChange={(e) => setMessage(e.target.value)} className="transition w-full p-2 outline outline-1 outline-slate-700 rounded focus:shadow-md focus:outline-blue-400" id="" cols={20} rows={5}></textarea>
            </div>
            <div>
                <button className="w-full transition p-3 bg-green-600 text-white hover:bg-green-700 rounded">Send</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
