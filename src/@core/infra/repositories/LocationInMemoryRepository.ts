import { ILocationRepository } from 'src/@core/application/repository/locationRepository.interface';
import { Location } from 'src/@core/domain/entity/Location';

export class LocationInMemoryRepository implements ILocationRepository {
  locations: Location[] = [];

  async createLocation(location: Location): Promise<{ locationId: number }> {
    this.locations[location.uuid] = location;
    return { locationId: Number(location.uuid) };
  }
  async findAllLocations(): Promise<any[]> {
    return Object.values(this.locations);
  }
}
