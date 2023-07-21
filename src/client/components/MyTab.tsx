import type { ReactNode } from 'react'

import React, { useState, cloneElement } from 'react'
import * as Tabs from '@radix-ui/react-tabs'

export enum Tab {
  ALL = 'all',
  PENDING = 'pending',
  COMPLETED = 'completed',
}

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: ReactNode | any
}

export const MyTab = ({ children }: Props) => {
  const [currentTab, setCurrentTab] = useState<string>(Tab.ALL)

  const onTabChange = (value: string) => {
    setCurrentTab(value)
  }

  const tabTriggerStyle =
    'rounded-full pb-3 pl-6 pr-6 pt-3 mr-2 border border-gray-200 h-11 data-tab-state-active:bg-gray-700 data-tab-state-active:text-white'

  return (
    <Tabs.Root
      className="TabsRoot"
      defaultValue={currentTab}
      onValueChange={onTabChange}
    >
      <Tabs.List className="TabsList mb-10">
        <Tabs.Trigger
          className={`TabsTrigger ${tabTriggerStyle}`}
          value={Tab.ALL}
        >
          <p className="text-sm font-bold">All</p>
        </Tabs.Trigger>
        <Tabs.Trigger
          className={`TabsTrigger ${tabTriggerStyle} `}
          value={Tab.PENDING}
        >
          <p className="text-sm font-bold">Pending</p>
        </Tabs.Trigger>
        <Tabs.Trigger
          className={`TabsTrigger ${tabTriggerStyle} border `}
          value={Tab.COMPLETED}
        >
          <p className="text-sm font-bold">Completed</p>
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className="TabsContent" value={currentTab}>
        {cloneElement(children, { tab: currentTab })}
      </Tabs.Content>
    </Tabs.Root>
  )
}
