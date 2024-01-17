import { Location } from "src/@core/domain/entity/Location"

export interface LocationRepository {
    save(location: Location): Promise<void>
}