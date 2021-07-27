import { getCustomRepository } from 'typeorm'
import { PostItRepositories } from '../repositories/PostItRepositories'

interface IPostItRequest {
  title: string;
  description: string;
}

class CreatePostItService {
  async execute({ title, description }:IPostItRequest){
    const postItRepository = getCustomRepository(PostItRepositories)

    if(!title || !description){
      throw new Error("You need to type all fields!")
    }

    const postIt = postItRepository.create({
      title,
      description,
    })

    await postItRepository.save(postIt)

    return postIt
  }
}


export { CreatePostItService }