import { Injectable } from '@nestjs/common';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
  constructor(@InjectRepository(Project) private projectsRepository: Repository<Project>) { }

  create(createProjectInput: CreateProjectInput) {
    const newUser = this.projectsRepository.create(createProjectInput)
    return this.projectsRepository.save(newUser);
  }

  findAll() {
    return this.projectsRepository.find();
  }

  findOne(id: number) {
    return this.projectsRepository.findOne(id);
  }

  update(id: number, updateProjectInput: UpdateProjectInput) {
    return this.projectsRepository.update(id, updateProjectInput);
  }

  remove(id: number) {
    return this.projectsRepository.delete(id);
  }
}
