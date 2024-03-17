/* eslint-disable @typescript-eslint/no-unused-vars */
import mysql, { Connection } from 'mysql2/promise';
import IDatabaseConnection from 'src/@core/adapters/IDatabaseConnection';

import bluebird from 'bluebird';

export default class MysqlAdapter implements IDatabaseConnection {
  databaseName: string;
  code?: number;
  private connection: Connection;
  constructor(
    readonly host: string,
    readonly user: string,
    readonly password: string,
    database: string,
    code?: number,
  ) {
    this.databaseName = database;
    this.code = code;
  }
  getDatabase(): string {
    return this.databaseName;
  }
  async connect(): Promise<void> {
    try {
      this.connection = await mysql.createConnection({
        host: this.host,
        user: this.user,
        password: this.password,
        database: this.databaseName,
        port: 3306,
        Promise: bluebird,
        pool: 10,
        waitForConnections: true,
        connectionLimit: 10,
        maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
        idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
        queueLimit: 0,
        rowsAsArray: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async query(statement: string, params?: any[]): Promise<any> {
    const [rows, fields] = await this.connection.query(statement, params);
    return rows;
  }
  async testConnection(): Promise<boolean> {
    const [rows, fields] = await this.connection.query('select 1 where 1 = ?', [
      1,
    ]);
    return Array(rows).length > 0;
  }
  async closeConnection(): Promise<void> {
    await this.connection.end();
  }

  destroy(): void {
    this.connection.destroy();
  }
}
