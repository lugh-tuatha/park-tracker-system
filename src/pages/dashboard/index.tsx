import { Card, CardContent, CardHeader } from '@/components/ui/card'

import Layout from '@/layout'
import SalesContainer from './_components/sales-container'

import { CarFront, CalendarCheck } from 'lucide-react'

function Dashboard() {
  return (
    <Layout>
      <h2 className='typography-h1'>Dashboard</h2>

      <div className="grid grid-cols-4 mt-8 gap-4">
        <Card>
          <CardHeader className='pb-0'>
            <div className=' flex items-center justify-between'>
              <h1>Total Revenue</h1>
              <span>$</span>  
            </div>
          </CardHeader>
          <CardContent>
            <h2 className='font-bold text-3xl mt-2'>₱5,323</h2>
            <p className='text-sm text-muted-foreground'>+20% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='pb-0'>
            <div className=' flex items-center justify-between'>
              <h1>Total cars parked</h1>
              <span>
                <CarFront size={18}/>
              </span>  
            </div>
          </CardHeader>
          <CardContent>
          <p className='font-bold text-3xl mt-2'>5</p>
            <p className='text-sm text-muted-foreground'>+20% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='pb-0'>
            <div className=' flex items-center justify-between'>
              <h1>Monthly</h1>
              <span>
                <CalendarCheck size={17}/>
              </span>  
            </div>
          </CardHeader>
          <CardContent>
            <h2 className='font-bold text-3xl mt-2'>12</h2>
            <p className='text-sm text-muted-foreground'>+1 from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className='flex gap-4 mt-4'>
        <Card className='w-2/5'>
          <CardHeader>
            <h1>Recent Sales</h1>
            <p>You made 2 sales this month</p>
          </CardHeader>
          <CardContent className='flex flex-col gap-4'>
            <SalesContainer name='Ace Gabriel P. Pasiliao' email='geo.acepasiliao@gmail.com' amount={1000}/>
            <SalesContainer name='Ace Gabriel P. Pasiliao' email='geo.acepasiliao@gmail.com' amount={1000}/>
          </CardContent>
        </Card>
      </div>
      
    </Layout>
  )
}

export default Dashboard