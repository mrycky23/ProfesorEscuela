import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filters/http-esception.filter';
import { TimeOutInterceptor } from './common/interceptors/timeout.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalInterceptors(new TimeOutInterceptor());
  const opciones = new DocumentBuilder()
    .setTitle('Profesor API')
    .setDescription('Document de profesor API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, opciones);
  SwaggerModule.setup('/api/docs', app, document, {
    swaggerOptions: { filter: true },
  });
  await app.listen(3001);
}
bootstrap();
