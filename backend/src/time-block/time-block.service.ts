import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTimeBlockDto } from './dto/create-time-block.dto';
import { UpdateTimeBlockOrdersDto } from './dto/update-time-block-orders.dto';
import { UpdateTimeBlockDto } from './dto/update-time-block.dto';

@Injectable()
export class TimeBlockService {
  constructor(private readonly prisma: PrismaService) {}

  create(userId: string, createTimeBlockDto: CreateTimeBlockDto) {
    return this.prisma.timeBlock.create({
      data: {
        ...createTimeBlockDto,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  findAll(userId: string) {
    return this.prisma.timeBlock.findMany({
      where: {
        userId,
      },
      orderBy: [{ order: 'asc' }, { createdAt: 'asc' }],
    });
  }

  findOne(id: string) {
    return this.prisma.timeBlock.findFirst({
      where: {
        id,
      },
    });
  }

  update(
    userId: string,
    id: string,
    updateTimeBlockDto: Partial<UpdateTimeBlockDto>,
  ) {
    return this.prisma.timeBlock.update({
      where: {
        id,
        userId,
      },
      data: updateTimeBlockDto,
    });
  }

  updateOrders(userId: string, { ids }: UpdateTimeBlockOrdersDto) {
    return this.prisma.$transaction(
      ids.map((id, order) =>
        this.prisma.timeBlock.update({
          where: { id, userId },
          data: { order },
        }),
      ),
    );
  }

  remove(userId: string, id: string) {
    return this.prisma.timeBlock.delete({
      where: {
        id,
        userId,
      },
    });
  }
}
