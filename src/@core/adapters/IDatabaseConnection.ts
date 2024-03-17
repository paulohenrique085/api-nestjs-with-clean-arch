export default interface IDatabaseConnection {
  connect(): void;
  query(statement: string, params?: any[]): Promise<any>;
  testConnection(): Promise<boolean>;
  closeConnection(): Promise<void>;
  destroy(): void;
  getDatabase(): string;
}
