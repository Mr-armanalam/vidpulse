import { Sidebar, SidebarContent } from '@/components/ui/sidebar'
import React from 'react'
import MainSection from './MainSection'
import { Separator } from '@/components/ui/separator'
import PersonalSetion from './PersonalSection'

const HomeSidebar = () => {
  return (
    <Sidebar className='pt-16 z-40 border-none'>
      <SidebarContent className='bg-background'>
        <MainSection />
        <Separator />
        <PersonalSetion />
      </SidebarContent>
    </Sidebar>
  )
}

export default HomeSidebar