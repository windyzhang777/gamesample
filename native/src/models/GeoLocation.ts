export interface GeoLocation {
  latitude: number;
  longitude: number;
  timestamp?: number;
  accuracy?: number;
  error?: string;
  hasChanged?: boolean;
}
