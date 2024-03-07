import { HttpException, Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { SportmanService } from 'src/sportman/sportman.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SkillEntity } from './entities/skill.entity';

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(SkillEntity)
    private readonly skillRepository: Repository<SkillEntity>,
    @InjectRepository(SportmanEntity)
    private readonly sportmanRepository: Repository<SportmanEntity>,
    private readonly sportmanService: SportmanService
  ) {}
  public async create(createSkillDto: CreateSkillDto, sportmanId: string) {
    let sportman = await this.sportmanService.findOne(sportmanId);
    if (!sportman) {
      throw new HttpException('the user not found', 404);
    }
    const newSkill = await this.skillRepository.save(createSkillDto);
    if (!newSkill) {
      throw new HttpException('the new skills is not created', 501);
    }
    sportman = await this.sportmanRepository.save({
      ...sportman,
      skill: newSkill
    });
    return sportman;
  }

  public async findAll() {
    return await this.skillRepository.find({ where: { isDelete: false } });
  }

  public async findOne(id: string) {
    const skill = await this.skillRepository
      .createQueryBuilder('skill')
      .where({ id })
      .getOne();
    // Si no se encuentra el sportman, lanzar una excepción
    if (!skill)
      throw new HttpException(`sportman con ID ${id} no encontrado`, 404);
    // Devolver el sportman encontrado
    return skill;
  }

  public async update(id: string, updateSkillDto: UpdateSkillDto) {
    const skill = await this.findOne(id);
    console.log(updateSkillDto);
    if (!skill) {
      throw new HttpException(`Skill con id ${id} no encontrado`, 404);
    }
    for (const key in updateSkillDto) {
      if (key === 'info') {
        skill.info = { ...skill.info, ...updateSkillDto };
      } else {
        skill[key] = updateSkillDto[key];
      }
    }

    return await this.skillRepository.save(skill);
  }

  public async remove(id: string) {
    await this.update(id, { isDelete: true });
    return await this.findOne(id);
  }
}
