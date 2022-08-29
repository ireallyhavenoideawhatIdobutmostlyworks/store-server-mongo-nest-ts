import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProductEntity } from "./entities/product.entity";

@Injectable()
export class ProductService {

    public constructor(
        @InjectRepository(ProductEntity) private usersRepository: Repository<ProductEntity>) {}
    
}