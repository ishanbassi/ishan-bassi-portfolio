// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { readMD } from '../../lib/fs-data';
export default async function(req:NextApiRequest,res:NextApiResponse) {
    let markdown = await readMD('about-me.md')
    res.send(markdown)
}