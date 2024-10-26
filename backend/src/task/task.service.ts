import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  create(userId: string, dto: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        deadlineDate: dto.deadlineDate,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  findAll(userId: string) {
    return this.prisma.task.findMany({
      where: {
        userId,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.task.findFirst({
      where: {
        id,
      },
    });
  }

  update(userId: string, id: string, dto: Partial<UpdateTaskDto>) {
    return this.prisma.task.update({
      where: {
        userId,
        id,
      },
      data: dto,
    });
  }

  remove(userId: string, id: string) {
    return this.prisma.task.delete({
      where: {
        id,
        userId,
      },
    });
  }
}
