import { Controller, Get, Param } from "@nestjs/common";

@Controller()
export class AppController {
  @Get("status")
  getStatus() {
    return { ok: true };
  }

  @Get("message/:name")
  getMessage(@Param("name") name: string) {
    return { message: `hello ${name}` };
  }
}


