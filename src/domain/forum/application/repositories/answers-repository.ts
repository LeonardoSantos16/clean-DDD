import { Answer } from '../forum/enterprise/entities/answer'
import { PaginationParams } from '@/core/repositories/pagination-params'
export interface AnswersRepository {
  findManyByQuestionId(
    questionId: string,
    params: PaginationParams,
  ): Promise<Answer[]>
  create(answer: Answer): Promise<void>
  findById(id: string): Promise<Answer | null>
  delete(answer: Answer): Promise<void>
  save(answer: Answer): Promise<void>
}
