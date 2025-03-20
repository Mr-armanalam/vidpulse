/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "@/db";
import { videoViews } from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { and, eq } from "drizzle-orm";
import { z } from "zod";

export const videoViewsRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        videoId: z.string().uuid(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { videoId } = input;
      const { id: userId } = ctx.user;
      console.log(videoId, userId, 'procedure');
      

      try {
        const [existingVideoView] = await db
          .select()
          .from(videoViews)
          .where(
            and(eq(videoViews.videoId, videoId), eq(videoViews.userId, userId))
          );
  
        if (existingVideoView) {
          return existingVideoView;
        }
  
        const [createdVideoView] = await db
          .insert(videoViews)
          .values({ userId, videoId })
          .returning();
          return createdVideoView;
      } catch (error:any) {
        console.log(error.message);
        throw new Error('some thing went wrong')        
      }

    }),
});
