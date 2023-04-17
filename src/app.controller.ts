import { Controller, Get } from '@nestjs/common';
import { MentorSearchRepository } from './mentor-search/repositories/prisma/mentor-search-repository';

@Controller()
export class AppController {
  constructor(private mentorSearchRepository: MentorSearchRepository) {}

  @Get('/')
  async index() {
    return 'Mentora';
  }
}
