import { createTRPCRouter } from '../init';
import { studioRouter } from '@/modules/studio/server/procedures';
import { videoRouter } from '@/modules/videos/server/procedures';
import { commentsRouter } from '@/modules/comments/server/procedures';
import { categoriesRouter } from '@/modules/categories/server/procedures';
import { videoViewsRouter } from '@/modules/video-views/server/procdures';
import { videoReactionsRouter } from '@/modules/video-reactions/server/procedures';
import { subscriptionsRouter } from '@/modules/subscriptions/server/procedures';
import { commentReactionsRouter } from '@/modules/comment-reactions/server/procedures';
import { suggestionsRouter } from '@/modules/suggestions/server/procedures';
export const appRouter = createTRPCRouter({
  studio: studioRouter,
  videos: videoRouter,
  comments: commentsRouter,
  categories: categoriesRouter,
  videoViews: videoViewsRouter,
  subscriptions: subscriptionsRouter,
  videoReactions: videoReactionsRouter,
  commentReactions: commentReactionsRouter,
  suggestions: suggestionsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;