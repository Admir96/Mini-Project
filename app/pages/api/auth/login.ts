import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const response = await axios.post('https://junior-test.mntzdevs.com/api/login/', req.body)
 
      res.setHeader('Authorization', `Bearer ${response.data.token}`)
      res.status(200).json(response.data.user)
    } catch (error : any) {
      res.status(error.response?.status || 500).json(error.response?.data || error.message)
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}