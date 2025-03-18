import { SignedIn } from "@clerk/nextjs";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import React from "react";
import MainSection from "./MainSection";
import { Separator } from "@/components/ui/separator";
import PersonalSetion from "./PersonalSection";
import SubscriptionsSection from "./subscriptions-section";

const HomeSidebar = () => {
  return (
    <Sidebar className="pt-16 z-40 border-none" collapsible="icon">
      <SidebarContent className="bg-background">
        <MainSection />
        <Separator />
        <PersonalSetion />
        <SignedIn>
          <>
            <Separator />
            <SubscriptionsSection />
          </>
        </SignedIn>
      </SidebarContent>
    </Sidebar>
  );
};

export default HomeSidebar;
