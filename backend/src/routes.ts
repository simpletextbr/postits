import { Router } from 'express'

import { CreatePostItController } from './controllers/CreatePostItController'
import { ListPostItController } from './controllers/ListPostItController'
import { DeletePostItController } from './controllers/DeletePostItController'

const routes = Router()

const createPostIt = new CreatePostItController()
const listPostIt = new ListPostItController()
const deletePostIt = new DeletePostItController()


routes.get("/postits", listPostIt.handle)
routes.post("/postits", createPostIt.handle)
routes.delete("/postits", deletePostIt.handle)

export { routes }
