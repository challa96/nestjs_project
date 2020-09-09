import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions} from '@nestjs/microservices'
import { combineLatest } from 'rxjs';


async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport:Transport.TCP,
  //     options:{host:"localhost",port:3000}
  //   } , 
  // );
  await app.listen(3000);
  //app.listen(()=> console.log("Micro service Listinening"));
}
bootstrap();
