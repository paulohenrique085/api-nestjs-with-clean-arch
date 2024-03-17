import { ILocationRepository } from '../repository/locationRepository.interface';

export class GetAllLocationsUseCase {
  constructor(private locationRepository: ILocationRepository) {}

  async execute(): Promise<any[]> {
    return this.locationRepository.findAllLocations();
  }
}
