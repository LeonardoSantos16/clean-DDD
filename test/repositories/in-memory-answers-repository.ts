import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'
export class InMemoryAnswersRepository implements AnswersRepository {
  public items: Answer[] = []

  async findBySlug(slug: string) {
    const question = this.items.find((item) => item.slug.value === slug)
    if (!question) {
      return null
    }
    return question
  }

  async create(answer: Answer) {
    this.items.push(answer)
  }
}
