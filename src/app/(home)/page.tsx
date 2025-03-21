import { DEFAULT_LIMIT } from "@/constants";
import { HomeView } from "@/modules/home/ui/views/home-views";
import { HydrateClient, trpc } from "@/trpc/server";


interface PageProps {
  searchParams: Promise<{categoryId?: string}>; //
}

export const dynamic='force-dynamic';


const Page = async ({ searchParams }: PageProps) => {
  const { categoryId } = await searchParams;

  void trpc.categories.getMany.prefetch();
  void trpc.videos.getMany.prefetchInfinite({categoryId, limit: DEFAULT_LIMIT});
  
  return (
    <HydrateClient>
      <HomeView categoryId={categoryId}/>
    </HydrateClient>
  );
}

export default Page;
