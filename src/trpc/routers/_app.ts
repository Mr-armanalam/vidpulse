import { createTRPCRouter } from '../init';
import { studioRouter } from '@/modules/studio/server/procedures';
import { videoRouter } from '@/modules/videos/server/procedures';
import { categoriesRouter } from '@/modules/categories/server/procedures';
import { videoViewsRouter } from '@/modules/video-views/server/procdures';
import { videoReactionsRouter } from '@/modules/video-reactions/server/procedures';
export const appRouter = createTRPCRouter({
  studio: studioRouter,
  videos: videoRouter,
  categories: categoriesRouter,
  videoViews: videoViewsRouter,
  videoReactions: videoReactionsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;