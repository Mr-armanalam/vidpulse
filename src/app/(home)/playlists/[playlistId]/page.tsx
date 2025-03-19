import { DEFAULT_LIMIT } from "@/constants";
import { VideosView } from "@/modules/playlists/ui/views/video-view";
import { HydrateClient, trpc } from "@/trpc/server";

interface PageProps {
  params: Promise<{ playlistId: string }>;    
}

export const dynamic='force-dynamic';


const Page = async ({params}:PageProps) => {
  const { playlistId } = await params;

  void trpc.playlists.getOne.prefetch({ id: playlistId });
  void trpc.playlists.getVideos.prefetchInfinite({playlistId, limit: DEFAULT_LIMIT });

  return (
    <HydrateClient>
      <VideosView playlistId={playlistId} />
    </HydrateClient>
  );
};

export default Page;