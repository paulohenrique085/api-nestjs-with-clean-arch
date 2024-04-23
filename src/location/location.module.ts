import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { CreateLocationUseCase } from 'src/@core/application/@usecases/create-location.usecase';
import { ILocationRepository } from 'src/@core/application/repository/locationRepository.interface';
import { GetAllLocationsUseCase } from 'src/@core/application/@usecases/get-all-locations.usecase';
import { LocationRepository } from 'src/@core/infra/repositories/locationRepository';
import MysqlAdapter from 'src/@core/infra/adapters/mysql.adapter';
import dotenv from 'dotenv';
dotenv.config();

const { HOST, USERNAME, PASSWORD, DATABASE_NAME } = process.env;

const teste = new LocationRepository(
  new MysqlAdapter(HOST, USERNAME, PASSWORD, DATABASE_NAME),
);

@Module({
  controllers: [LocationController],
  providers: [
    {
      provide: LocationRepository,
      useFactory: () => teste,
    },
    /*nesse caso, utilizamos o useFactory pois como o caso de uso de registro precisa de um parametro no construtor, eu preciso
    utilizar artificio para injetar(ensinar) isso no nest*/
    {
      provide: CreateLocationUseCase,
      //utiliza-se o useFactory pois estamos ensinando o nest a usar algo.
      useFactory: (locationRepository: ILocationRepository) => {
        return new CreateLocationUseCase(locationRepository);
      },
      //repositorio em si que vai ser utilizado como DB
      inject: [LocationRepository],
    },
    {
      provide: GetAllLocationsUseCase,
      useFactory: (locationRepository: ILocationRepository) => {
        return new GetAllLocationsUseCase(locationRepository);
      },
      inject: [LocationRepository],
    },
  ],
})
export class LocationModule {}
