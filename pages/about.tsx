import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl rounded-lg p-10">
      <main className="flex flex-col">
        <h1 className="text-3xl font-bold">About Page</h1>
        <p className="text-xl">
          <Link href="/">&larr; Go Back</Link>
        </p>
      </main>
    </div>
  )
}
