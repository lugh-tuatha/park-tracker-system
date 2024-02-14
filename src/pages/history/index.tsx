import React from 'react'

import Layout from '@/layout'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

function History() {
  return (
    <Layout>
        <h2 className='typography-h1'>History</h2>

        <Table className='mt-8'>
            <TableCaption>Parking History.</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead>Plate Number</TableHead>
                <TableHead>Hours stayed</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead className='text-right'>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                <TableCell>ACC - 143</TableCell>
                <TableCell>1.5</TableCell>
                <TableCell>50.00</TableCell>
                <TableCell className='text-right'>Paid</TableCell>
                </TableRow>
            </TableBody>
        </Table>

    </Layout>
  )
}

export default History