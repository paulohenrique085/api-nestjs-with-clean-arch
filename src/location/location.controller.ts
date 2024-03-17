import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { CreateLocationUseCase } from 'src/@core/application/@usecases/create-location.usecase';
import { GetAllLocationsUseCase } from 'src/@core/application/@usecases/get-all-locations.usecase';

@Controller('api/location')
export class LocationController {
  constructor(
    private createLocationUseCase: CreateLocationUseCase,
    private getAllLocationsUseCase: GetAllLocationsUseCase,
  ) {}

  @Post('/create')
  create(@Body() createLocationDto: CreateLocationDto) {
    return this.createLocationUseCase.execute(createLocationDto);
  }

  @Get('/locations')
  findAll() {
    return this.getAllLocationsUseCase.execute();
  }
}
