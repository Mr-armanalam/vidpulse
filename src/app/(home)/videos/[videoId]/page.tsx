import { VideoView } from '@/modules/videos/ui/views/video-view';
import { HydrateClient, trpc } from '@/trpc/server';
import React from 'react'

interface PageProps {
  params: Promise<{videoId: string;}>;
}
const Page = async ({params}: PageProps) => {
  const { videoId } = await params;

  void trpc.videos.getOne.prefetch({ id: videoId});
  // TODO: don't forget to 'prefetchinfinite
  void trpc.comments.getMany.prefetch({ videoId: videoId });
  return (
    <HydrateClient>
      <VideoView videoId={videoId} />
    </HydrateClient>
  )
}

export default Page