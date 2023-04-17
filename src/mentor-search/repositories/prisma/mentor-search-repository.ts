import { Injectable } from '@nestjs/common';
// import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class MentorSearchRepository {
  constructor(private prisma: PrismaService) {}

  async index(): Promise<void> {
    await this.prisma.mentor.findMany(); // criar uma query para retornar todos os mentores para a página inicial
  }

  async search(query): Promise<void> {
    await this.prisma.mentor.findMany(); // criar uma query para retornar todos os mentores filtrados
  }
}
