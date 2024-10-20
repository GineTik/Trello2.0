import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PomodoroTimerService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) {}

  async getTodaySession(userId: string) {
    const today = new Date().toISOString().split('T')[0];

    return this.prisma.pomodoroSession.findFirst({
      where: {
        createdAt: {
          gte: new Date(today),
        },
        userId,
      },
      include: {
        rounds: {
          orderBy: {
            id: 'desc',
          },
        },
      },
    });
  }

  async getHistorySessions(userId: string) {
    return this.prisma.pomodoroSession.findFirst({
      where: {
        userId,
      },
    });
  }
}
