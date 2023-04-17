import { Controller, Get, Query } from '@nestjs/common';
import { MentorSearchRepository } from './repositories/prisma/mentor-search-repository';

@Controller('mentors')
export class MentorSearchController {
  constructor(private mentorSearchRepository: MentorSearchRepository) {}

  @Get()
  async index() {
    return await this.mentorSearchRepository.index();
  }

  @Get()
  async searchMentorsByFilter(@Query() query) {
    return await this.mentorSearchRepository.search(query);
  }
}
