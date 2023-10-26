'use client' // Error components must be Client Components

import { useEffect } from 'react'
import Link from "next/link";

export default function Error({
      error,
      reset,
  }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
            <h2 className="text-xl underline">
                <Link href='/'>Go back to home</Link>
            </h2>
        </div>
    )
}