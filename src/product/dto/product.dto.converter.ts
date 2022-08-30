import { ProductEntity } from "../entities/product.entity";
import { ProductDto } from "./product.dto";

export class ProductDtoConverter {

    private constructor(){}


    public static convertToDto(productEntity: ProductEntity): ProductDto {
        return new ProductDto(
            productEntity.productName,
            productEntity.basePrice,
            productEntity.finalPrice,
            productEntity.discountPrice,
            productEntity.description,
            productEntity.productSpecification
        );
    }
}