import { Location } from 'src/@core/domain/entity/Location';
import { ILocationRepository } from '../repository/locationRepository.interface';

export class CreateLocationUseCase {
  constructor(private locationRepository: ILocationRepository) {}

  async execute(input: Input): Promise<Output> {
    const locationCreated = Location.create(input.latitude, input.longitude);

    const { locationId } =
      await this.locationRepository.createLocation(locationCreated);

    return { idLocation: locationId };
  }
}

type Input = { latitude: string; longitude: string };
type Output = { idLocation: number };
