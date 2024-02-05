import Layout from '@/layout'
import { Card,CardContent, CardFooter, CardTitle, CardHeader } from '@/components/ui/card'

function Dashboard() {
  return (
    <Layout>
      <h2 className='typography-h1'>Dashboard</h2>

      <div className="grid grid-cols-4 mt-8 gap-4">
        <Card>
          <CardHeader className='pb-0'>
            <h1>Total cars park</h1>
          </CardHeader>
          <CardContent>
          <p className='font-bold text-3xl mt-2'>5</p>
            <p className='text-sm opacity-50'>+20% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='pb-0'>
            <div className=' flex items-center justify-between'>
              <h1>Total Revenue</h1>
              <span>$</span>  
            </div>
          </CardHeader>
          <CardContent>
            <h2 className='font-bold text-3xl mt-2'>₱5,323</h2>
            <p className='text-sm opacity-50'>+20% from last month</p>
          </CardContent>
        </Card>
      </div>
      
    </Layout>
  )
}

export default Dashboard