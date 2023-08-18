import { Story } from "@/types/story.model";

export const Api = {
    stories: {
        getStoriesId: async () => {
            const result = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
                .then(async res => res.json() as Promise<number[]>)
            return result.slice(0, 15)
        },
        getStories: async (ids: number[]) => {
            const stories = await Promise.all(
                ids.map(async id => {
                    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
                    .then(res => res.json() as Promise<Story>)
                   return { ...response, selected: false }
                })
            )
            return stories;
        }
    }
}