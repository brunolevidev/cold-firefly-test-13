import { Controller, Get } from '@nestjs/common';

@Controller('api/cars')
export class CarsController {
  @Get()
  getAllCars() {
    return {
      year: 2012,
      brand: 'Chevrolet',
      model: 'Impala',
      mileage: '127463',
      location: 'Tavares',
      engine: '3.6L V6 DOHC 16V FFV',
      transmision: '6-Speed Automatic',
      vin: '2G1WC5E36C1158443',
      color: 'gold',
      image:
        'https://cdn.prod.website-files.com/659d52e325ba52d02c9bab63/670f4c2509ee683b20d2e22f_25de9dc3-0227-40d1-a7f8-d44278655068.jpeg',
      safety: [
        'ABS Brakes',
        'Child Safety Door Locks',
        'Driver Airbag',
        'Fog Lights',
        'Front Side Airbag',
        'Keyless Entry',
        'Passenger Airbag',
        'Rear Window Defogger',
        'Traction Control',
        'Vehicle Anti-Theft',
        'Vehicle Stability Control System',
      ],
      comfort: [
        'Air Conditioning',
        'AM/FM Radio',
        'Cruise Control',
        'Driver Multi-Adjustable Power Seat',
        'Front Heated Seat',
        'Manual Sunroof',
        'Passenger Multi-Adjustable Power Seat',
        'Power Windows',
        'Remote Ignition',
        'Separate Driver/Front Passenger Climate Controls',
        'Tilt Steering',
        'Tilt Steering Column',
      ],
      exterior: [
        'Alloy Wheels',
        'Automatic Headlights',
        'Daytime Running Lights',
        'Front Air Dam',
        'Heated Exterior Mirror',
        'Rear Spoiler',
        'Splash Guards',
      ],
      interior: [
        'Cargo Net',
        'Electrochromic Interior Rearview Mirror',
        'Leather Seat',
        'Leather Steering Wheel',
        'Second Row Folding Seat',
        'Steering Wheel Mounted Controls',
        'Trip Computer',
      ],
      entertainment: ['CD Player', 'Voice Activated Telephone'],
      specs: [
        'Tachometer',
        'Telematics System',
        'Tire Pressure Monitor',
        'Trunk Anti-Trap Device',
      ],
      others: [
        'Interval Wipers',
        'Power Adjustable Exterior Mirror',
        'Power Door Locks',
        'Power Sunroof',
        'Side Head Curtain Airbag',
      ],
    };
  }
}
