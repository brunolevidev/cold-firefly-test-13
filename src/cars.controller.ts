import { Controller, Get } from '@nestjs/common';

@Controller('api/cars')
export class CarsController {
  @Get()
  getAllCars() {
    //
    return { message: 'This is the cars route' };
  }
}
