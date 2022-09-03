import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ObjectID, Repository } from "typeorm";
import { ProductDto } from "./dto/product.dto";
import { ProductDtoConverter } from "./dto/product.dto.converter";
import { ProductEntity } from "./entities/product.entity";
import { ProductEntityConverter } from "./entities/product.entity.converter";

@Injectable()
export class ProductService {

    public constructor(
        @InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>) {}


    public async findAll(): Promise<ProductDto[]> {
        const productEntityList: ProductEntity[] = await this.productRepository.find();
        return productEntityList.map(entity => ProductDtoConverter.convertToDto(entity)) as ProductDto[];
    }

    public async findOneByUuid(uuid: string): Promise<ProductDto> {
        const productEntity: ProductEntity = await this.productRepository.findOne({where: {uuid: uuid}});
        return ProductDtoConverter.convertToDto(productEntity);
    }
    
    public add(productDto: ProductDto): void {
        this.productRepository.save(ProductEntityConverter.convertToEntity(productDto));
    }

    public async updateByUuid(uuid: string, userDto: ProductDto): Promise<void> {
        const _ObjectId: ObjectID = (await this.productRepository.findOne({where: {uuid: uuid}}))._id;
        this.productRepository.update(_ObjectId, ProductEntityConverter.convertToEntity(userDto));
    }
    
    public async removeByUuid(uuid: string): Promise<void> {
        const userEntity: ProductEntity = await this.productRepository.findOne({where: {uuid: uuid}});
        this.productRepository.delete(userEntity._id);
    }
}