import { ProductSpecificationDto } from "../dto/product.specification.dto";
import { ProductSpecificationEntity } from "./product.specification.entity";

export class ProductSpecificationEntityConverter {

    private constructor(){}


    public static convertToEntity(productSpecificationDto: ProductSpecificationDto): ProductSpecificationEntity {
        return new ProductSpecificationEntity(
            productSpecificationDto.productBrand,
            productSpecificationDto.productType,
            productSpecificationDto.productWarranty,
            productSpecificationDto.prudctAdventages,
            productSpecificationDto.prudctFeatures
        );
    }
}