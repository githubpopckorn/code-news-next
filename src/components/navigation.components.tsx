'use client'
import { Api } from "@/api/api"
import { StoryList } from "./story-list.component";
import { useEffect } from "react";
import { useStore } from "@/store/useStore";
import SkeletonCard from "./skeleton-card.component";

export default function Navigation() {
  const { setStoriesId, setStories, stories } = useStore()

  useEffect(() => {
    const getSotries = async () => {
      const storiesId = await Api.stories.getStoriesId();
      const stories = await Api.stories.getStories(storiesId);

      setStoriesId(storiesId);
      setStories(stories);
    }

    getSotries();
  }, [setStories, setStoriesId])

  return (
    <nav className="max-h-[calc(100vh-48px)] overflow-y-auto overflow-x-hidden w-1/4 p-2">
      <ul>
        {stories.length === 0 && (
          Array(15).fill(0).map((_, index) => (
            <li key={index}>
              <SkeletonCard />
            </li>
          ))
        )}
        {
          stories.map(story => (
            <li key={story.id}>
              <StoryList story={story} />
            </li>
          ))
        }
      </ul>
    </nav>
  )
}