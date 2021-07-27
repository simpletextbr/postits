import { Request, Response } from 'express'
import { CreatePostItService } from '../services/CreatePostItService'


class CreatePostItController {
  async handle(request: Request, response: Response){
    const { title, description } = request.body

    const createPostIt = new CreatePostItService()

    const postIt = await createPostIt.execute({ title, description })

    return response.json(postIt)
  }
}

export { CreatePostItController }