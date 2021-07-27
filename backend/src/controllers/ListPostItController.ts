import { Request, Response } from 'express'
import { ListPostItService } from '../services/ListPostItService'

class ListPostItController {
  async handle(request: Request, response: Response){
    const listPostIts = new ListPostItService()

    const postIt = await listPostIts.execute()

    return response.json(postIt)
  }
}

export { ListPostItController }
