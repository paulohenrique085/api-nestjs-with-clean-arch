import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { RegisterLocation } from 'src/@core/application/@usecases/RegisterLocation';
import { GetAllLocations } from 'src/@core/application/@usecases/GetAllLocations';

@Controller('location')
export class LocationController {
  constructor(
    private registerLocation: RegisterLocation,
    private getAllLocations: GetAllLocations,
  ) {}

  @Post('/register')
  create(@Body() createLocationDto: CreateLocationDto) {
    return this.registerLocation.execute(createLocationDto);
  }

  @Get('/locations')
  findAll() {
    return this.getAllLocations.execute();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.locationService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateLocationDto: UpdateLocationDto) {
  //   return this.locationService.update(+id, updateLocationDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.locationService.remove(+id);
  // }
}
