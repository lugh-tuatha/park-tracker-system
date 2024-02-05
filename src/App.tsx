import './App.css'

import Layout from './layout'

// shadcn components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './components/ui/button'

import { Plus } from "lucide-react"

function App() {
  return (
    <Layout>      
      <h1 className='typography-h1'>Parking Record System</h1>
      
      <h2 className='typography-h2 my-2'>Cars</h2>
      <div className='grid grid-cols-4 gap-4'>
        <Card>
          <CardHeader>
            <CardTitle>NCB 4052</CardTitle>
            <CardDescription>Honda</CardDescription>
            <p className='text-sm'><span className='font-bold'>elapsed time: </span>22:33 hrs</p>
            <p className='text-sm'><span className='font-bold'>₱</span> 50.00</p>
          </CardHeader>
          <CardContent>
            <img src="https://images.summitmedia-digital.com/topgear/images/2023/07/13/honda-city-2023-red-main-1689258380.jpg"/>
          </CardContent>
          <CardFooter className='gap-4'>
            <Button variant="outline">Cancel</Button>
            <Button>Out</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardContent className='p-0 h-full flex justify-center items-center cursor-pointer'>
            <Plus className='h-24 w-24 opacity-50 scale-100'/>
          </CardContent>
        </Card>
      </div>

      <h2 className='typography-h2 my-2'>Motor</h2>
      <div className='grid grid-cols-4 gap-4'>
        <Card>
          <CardHeader>
            <CardTitle>NCB 4052</CardTitle>
            <CardDescription>Honda</CardDescription>
            <p className='text-sm'><span className='font-bold'>elapsed time: </span>22:33 hrs</p>
            <p className='text-sm'><span className='font-bold'>₱</span> 50.00</p>
          </CardHeader>
          <CardContent>
            <img src="https://images.summitmedia-digital.com/topgear/images/2023/07/13/honda-city-2023-red-main-1689258380.jpg"/>
          </CardContent>
          <CardFooter className='gap-4'>
            <Button variant="outline">Cancel</Button>
            <Button>Out</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardContent className='p-0 h-full flex justify-center items-center cursor-pointer'>
            <Dialog>
              <DialogTrigger>
                <Plus className='h-24 w-24 opacity-50 scale-100'/>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

export default App
