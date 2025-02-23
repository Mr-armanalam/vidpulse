'use client'

import { trpc } from "@/trpc/client"

export const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({
    text: 'arman'
  })
  return (
    <div>
      <h1>Page Client  says : { data.greeting}</h1>
    </div>
  )
}