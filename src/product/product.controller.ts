import { Controller } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller('api/product')
export class ProductController {

    public constructor(private readonly userService: ProductService) {}

}