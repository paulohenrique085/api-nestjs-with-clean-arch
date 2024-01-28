import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { LocationInMemoryRepository } from 'src/@core/infra/db/LocationInMemoryRepository';
import { RegisterLocation } from 'src/@core/application/@usecases/RegisterLocation';
import { LocationRepositoryInterface } from 'src/@core/application/repository/LocationRepository';
import { GetAllLocations } from 'src/@core/application/@usecases/GetAllLocations';

@Module({
  controllers: [LocationController],
  providers: [
    LocationService,

    //configurando dessa forma pois esssa classe nao recebe nenhum parametro no construtor
    {
      provide: LocationInMemoryRepository,
      useClass: LocationInMemoryRepository,
    },
    /*nesse caso, utilizamos o useFactory pois como o caso de uso de registro precisa de um parametro no construtor, eu preciso
    utilizar artificio para injetar(ensinar) isso no nest*/
    {
      provide: RegisterLocation,
      //utiliza-se o useFactory pois estamos ensinando o nest a usar algo.
      useFactory: (locationRepository: LocationRepositoryInterface) => {
        return new RegisterLocation(locationRepository);
      },
      //repositorio em si que vai ser utilizado como DB
      inject: [LocationInMemoryRepository],
    },
    {
      provide: GetAllLocations,
      useFactory: (locationRepository: LocationRepositoryInterface) => {
        return new GetAllLocations(locationRepository);
      },
      inject: [LocationInMemoryRepository],
    },
  ],
})
export class LocationModule {}
