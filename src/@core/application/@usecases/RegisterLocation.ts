
import { Location } from "src/@core/domain/entity/Location";
import { LocationRepositoryInterface } from "../repository/LocationRepository";

export class RegisterLocation {
    constructor(private locationRepository: LocationRepositoryInterface) { }

    async execute(input: Input) {
        const locationCreated = Location.create(input.latitude, input.longitude)
        console.log(locationCreated)
        return this.locationRepository.save(locationCreated)

    }
}

type Input = { latitude: string, longitude: string }