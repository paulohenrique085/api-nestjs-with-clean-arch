import { LocationRepositoryInterface } from 'src/@core/application/repository/LocationRepository';
import { Location } from 'src/@core/domain/entity/Location';

export class LocationInMemoryRepository implements LocationRepositoryInterface {
  locations: Location[] = [];

  async save(location: Location): Promise<void> {
    this.locations[location.id] = location;
  }
  async findAll(): Promise<Location[]> {
    return Object.values(this.locations);
  }
}
