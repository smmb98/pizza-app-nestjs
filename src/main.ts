import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    // { logger: ['error', 'warn', 'fatal', 'verbose'] },
  );
  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public/',
  });

  await app.listen(process.env.PORT ?? 3000);
  console.log(`\n\n\nApplication is running on: ${await app.getUrl()}\n\n\n`);
}
bootstrap();
