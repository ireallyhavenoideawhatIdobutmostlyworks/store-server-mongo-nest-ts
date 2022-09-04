import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Res } from "@nestjs/common";
import { ProductDto } from "./dto/product.dto";
import { ProductService } from "./product.service";

@Controller('api/product')
export class ProductController {

    public constructor(private readonly productService: ProductService) {}


    @Get()
    @HttpCode(200)
    public findAll() {
        return this.productService.findAll();
    }

    @Get(':uuid')
    @HttpCode(200)
    public findOneByUuid(@Param('uuid') uuid: string) {
        return this.productService.findOneByUuid(uuid);
    }

    @Post()
    public add(@Body() productDto: ProductDto) {
        this.productService.add(productDto);
    }

    @Patch(':uuid')
    @HttpCode(200)
    public updateByUuid(@Param('uuid') uuid: string, @Body() productDto: ProductDto) {
      return this.productService.updateByUuid(uuid, productDto);
    }
  
    @Delete(':uuid')
    @HttpCode(204)
    public removeByUuid(@Param('uuid') uuid: string) {
      return this.productService.removeByUuid(uuid);
    }
}