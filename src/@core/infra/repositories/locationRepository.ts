import IDatabaseConnection from 'src/@core/adapters/IDatabaseConnection';
import { ILocationRepository } from 'src/@core/application/repository/locationRepository.interface';
import { Location } from 'src/@core/domain/entity/Location';

export class LocationRepository implements ILocationRepository {
  constructor(private readonly connection: IDatabaseConnection) {}

  async createLocation(input: Location) {
    await this.connection.connect();

    const query = `
    INSERT INTO points_of_geolocations
    (LATITUDE, LONGITUDE, UUID) 
    VALUES (?,?, ?);
  `;

    const valuesForQuery = [input.latitude, input.longitude, input.uuid];
    const { insertId } = await this.connection.query(query, valuesForQuery);

    await this.connection.closeConnection();

    return { locationId: insertId };
  }
  async findAllLocations() {
    await this.connection.connect();

    const query = `SELECT * FROM geolocation.points_of_geolocations;`;

    const locations = await this.connection.query(query);

    await this.connection.closeConnection();

    return locations;
  }
}
