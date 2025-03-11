import Link from "next/link";
import { VideoGetOneOutput } from "../../types";
import { UserAvatar } from "@/components/user-avatar";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { SubscriptionButton } from "@/modules/subscriptions/ui/components/subscription-button";
import { UserInfo } from "@/modules/users/ui/components/user-info";

interface VideoOwnerProps {
  user: VideoGetOneOutput['user'];
  videoId: string;
}

export const VideoOwner = ({user, videoId } : VideoOwnerProps) => {
  const { userId: clerkUserId } = useAuth();
  return (
    <div className="flex items-center sm:items-start justify-between sm:justify-start gap-3 min-w-0">
      <Link href={`/users/${user.id}`}>
        <div className="flex items-center gap-3 min-w-0">
          <UserAvatar size={'lg'} imageUrl={user.imageUrl} name={user.name} />
          <div className="flex flex-col gap-1 min-w-0">
            <UserInfo
              size={'lg'}
              name={user.name}
            />
            <span className="text-xs text-muted-foreground line-clamp-1">
              {/* TODO: properly fill subscribers count */}
              {0} subscribers
            </span>
          </div>
        </div>
      </Link>
      {clerkUserId === user.clerkId ? (
        <Button className="rounded-full " variant={'secondary'} asChild>
          <Link href={`/studio/videos/${videoId}`}>
            Edit video
          </Link>
        </Button>
      ):(
        <SubscriptionButton 
          onClick={() => {}}
          disabled={false}
          isSubscribed={false}
          className="flex-none"
        />
      )}
    </div>
  )
}