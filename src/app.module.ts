import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      database: 'store',
      host: 'localhost',
      port: 27017,
      synchronize: true,
      entities: ['**/*.entity.js']
    })
  ]
})
export class AppModule {}
