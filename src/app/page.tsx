'use client'

import { useStore } from "@/store/useStore"

export default function Home() {
  const stories = useStore(state => state.stories)
  const story = stories.find(story => story.selected)

  return (
    <section className="grid grid-cols-1 grid-rows-1 place-content-center items-center w-3/4 max-h-[100vh-48px]">
      {
        story ? 
        <iframe src={story.url}  className="w-full h-full"></iframe>
        :
        <h1 className="text-4xl font-bold text-center">Welcome to the Code News</h1>
      }
    </section>
  )
}
