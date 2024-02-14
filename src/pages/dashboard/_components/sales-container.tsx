import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Props {
  name: String,
  email: String,
  amount: number
}

function SalesContainer(props: Props) {
  return (
    <div className='flex justify-between items-center'>
    <div className='flex items-center gap-4'>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div>
        <h2 className='text-sm font-medium'>{props.name}</h2>
        <div className='text-sm text-muted-foreground mt-1'>{props.email}</div>
      </div>
    </div>

    <div>
      <h2 className='text-lg font-medium'>₱ {props.amount}</h2>
    </div>
  </div>
  )
}

export default SalesContainer