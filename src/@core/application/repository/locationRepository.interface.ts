import { Location } from 'src/@core/domain/entity/Location';

export interface ILocationRepository {
  createLocation(input: Location): Promise<OutputCreateLocation>;
  findAllLocations(): Promise<any[]>;
}

type OutputCreateLocation = { locationId: number };
