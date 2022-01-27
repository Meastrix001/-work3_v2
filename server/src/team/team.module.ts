import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './entities/team.entity';
import { TeamResolver } from './team.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Team])],
  providers: [TeamResolver, TeamService],
  exports: [TeamService]
})
export class TeamModule { }
