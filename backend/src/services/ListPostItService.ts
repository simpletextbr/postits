import { getCustomRepository } from 'typeorm'
import { PostItRepositories } from '../repositories/PostItRepositories'
import { classToPlain } from 'class-transformer'


class ListPostItService {
  async execute(){
    const postItRepository = getCustomRepository(PostItRepositories)

    const postIt = await postItRepository.find()

    if(postIt.length === 0){
      throw new Error("we cannot find no Post It")
    }

    return classToPlain(postIt)
  }
}

export { ListPostItService }
