import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { Model, Schema } from 'mongoose';

export class Entry {
  readonly name: string;
  readonly twitterTag: string;
  readonly pdf: string;
  readonly page: string;
}

@ApiUseTags('job')
@Controller('job')
export class JobController {

  constructor(
    @Inject('EntryModelToken') private readonly entryModel: Model<any>) {}

  @Get()
  @ApiResponse({ status: 200, description: `Returns list of all jobs`})
  async root() {
    return await this.entryModel.find().lean();
  }


  @Post()
  @ApiResponse({ status: 200, description: `Create job`})
  async create(@Body() e: Entry) {
    return await new this.entryModel(e).save();
  }
}
