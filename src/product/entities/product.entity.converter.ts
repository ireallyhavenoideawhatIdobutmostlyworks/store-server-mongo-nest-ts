import { ProductDto } from "../dto/product.dto";
import { ProductEntity } from "./product.entity";

export class ProductEntityConverter {

    private constructor(){}


    public static convertToEntity(productDto: ProductDto): ProductEntity {
        return new ProductEntity(
            productDto.productName,
            productDto.basePrice,
            productDto.finalPrice,
            productDto.discountPrice,
            productDto.description,
            productDto.productSpecification
        );
    }
}