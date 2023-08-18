'use client'
import { useStore } from "@/store/useStore";
import { Story } from "@/types/story.model";
import { Card } from "@nextui-org/react";

export interface Props {
    story: Story
}
export function StoryList({ story }: Props) {
    const setSelected = useStore(state => state.setSelected)
    return (
        <Card className={`rounded-sm max-w-full h-20 p-4 text-sm overflow-hidden
        transition-transform duration-500 hover:scale-y-110 flex flex-col justify-between ${story.selected && `bg-yellow-300 dark:text-black`}`}>
            <p className="truncate font-bold">
                {story.title}
            </p>
            <article className={`flex justify-between items-center text-xs`}>
                <p className={`text-slate-400 ${story.selected && `dark:text-black text-white`}`}>posted by: {story.by}</p>
                <button onClick={() => setSelected(story)}>
                    <p>visit website &gt;&gt;</p>
                </button>
            </article>
        </Card>
    )
}