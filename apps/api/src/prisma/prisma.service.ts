import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from '../generated/prisma/client';

// @Injectable()
// export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
//   async onModuleInit() {
//     await this.$connect();
//   }

//   async onModuleDestroy() {
//     await this.$disconnect();
//   }
// }


@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        const adapter = new PrismaPg(
            // eslint-disable-next-line turbo/no-undeclared-env-vars
            { connectionString: process.env.DATABASE_URL },
            { schema: 'myPostgresSchema' }
        );
        super({ adapter });
    }
}
