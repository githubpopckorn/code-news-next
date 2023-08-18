import { Story } from '@/types/story.model'
import { create } from 'zustand'

export interface Store {
    storiesId: number[];
    stories: Story[];
    setStoriesId: (storiesId: number[]) => void;
    setStories: (stories: Story[]) => void;
    setSelected: (story: Story) => void;
}

export const useStore = create<Store>((set) => ({ 
    storiesId: [],
    stories: [],
    setStoriesId: (storiesId: number[]) => set({ storiesId }),
    setStories: (stories: Story[]) => set({ stories }),
    setSelected: (story: Story) => set((state) => ({
        stories: state.stories.map((s) => {
            if (s.id === story.id) {
                return { ...s, selected: true }
            }
            return { ...s, selected: false}
        })
        
    })),
 }))