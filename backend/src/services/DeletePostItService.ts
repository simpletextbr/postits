import { getCustomRepository } from 'typeorm'
import { PostItRepositories } from '../repositories/PostItRepositories'



class DeletePostItService {
  async execute({ id } :any){
    const postItRepository = getCustomRepository(PostItRepositories)

    if(!id){
      throw new Error("You need send id for delete")
    }

    await postItRepository.delete({id})

    return id
  }
}

export { DeletePostItService }