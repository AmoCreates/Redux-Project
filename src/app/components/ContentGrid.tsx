import { RootState } from '@/Toolkit/store'
import React from 'react'
import { useSelector } from 'react-redux'

const ContentGrid = () => {
  const content = useSelector((state:RootState) => state.search.results)
  const activeTab = useSelector((state:RootState) => state.search.activeTab);
  console.log(content.length)
  return (
    <div className='flex gap-3 flex-wrap'>
      {
        content.map((con, i) => (
          <div key={i} className='bg-zinc-100 w-2xs h-[600px] flex-grow'></div>
        ))
      }
    </div>
  )
}

export default ContentGrid
