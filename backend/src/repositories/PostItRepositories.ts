import { Repository, EntityRepository } from "typeorm";
import { PostIt } from '../entities/PostIt'

@EntityRepository(PostIt)
class PostItRepositories extends Repository<PostIt>{

}

export { PostItRepositories }
