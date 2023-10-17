import{ Module } from '@nestjs/common'
import { HeroController } from './hero.controller';
import { HeroService } from './hero.service';

@Module({
    controllers: [HeroController],
    providers: [HeroController],
  })
  export class HeroModule {}