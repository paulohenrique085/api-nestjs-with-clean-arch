import { Location } from 'src/@core/domain/entity/Location';
import { LocationRepositoryInterface } from '../repository/LocationRepository';

export class RegisterLocation {
  constructor(private locationRepository: LocationRepositoryInterface) {}

  async execute(input: Input): Promise<Output> {
    const locationCreated = Location.create(input.latitude, input.longitude);
    await this.locationRepository.save(locationCreated);
    return { idLocation: locationCreated.id };
  }
}

type Input = { latitude: string; longitude: string };
type Output = { idLocation: string };
