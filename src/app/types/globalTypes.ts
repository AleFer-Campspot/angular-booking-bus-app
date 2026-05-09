export interface SearchBus {
  fromLocation: number;
  toLocation: number;
  travelDate: string;
}

export interface BusListItem {
  availableSeats: number
  totalSeats: number
  price: number
  arrivalTime: string
  scheduleId: number
  departureTime: string
  busName: string
  busVehicleNo: string
  fromLocationName: any
  toLocationName: any
  vendorName: any
  scheduleDate: string
  vendorId: number
}
