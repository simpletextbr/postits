import { Request, Response } from 'express'
import { DeletePostItService } from '../services/DeletePostItService'


class DeletePostItController {
  async handle(request: Request, response: Response){
    const id  = request.query

    const deletePostIt = new DeletePostItService()

    await deletePostIt.execute(id)

    return response.status(200).send()
  }
}

export { DeletePostItController }