import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { JobController } from './job.controller';
import { entryProviders } from './job.providers';

@Module({
    controllers: [
      JobController
    ],
    modules: [
      DatabaseModule
    ],
    components: [
      ...entryProviders
    ],
})
export class JobModule {}
