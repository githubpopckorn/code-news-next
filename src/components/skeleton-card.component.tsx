import { Card, Skeleton } from "@nextui-org/react";
export default function SkeletonCard() {
    return (
        <Card className="w-full h-20 space-y-5 p-4 rounded-none" >
            <div className="space-y-5">
                <Skeleton className="w-full rounded-lg">
                    <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <article className="flex justify-between">
                    <Skeleton className="w-2/5 rounded-lg">
                        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                    </Skeleton>
                    <Skeleton className="w-2/5 rounded-lg">
                        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                    </Skeleton>
                </article>
            </div>
        </Card>
    )
}