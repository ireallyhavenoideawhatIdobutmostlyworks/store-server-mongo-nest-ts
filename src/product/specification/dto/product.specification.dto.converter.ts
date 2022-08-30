
import { ProductSpecificationEntity } from "../entity/product.specification.entity";
import { ProductSpecificationDto } from "./product.specification.dto";

export class ProductSpecificationDtoConverter {

    private constructor(){}


    public static convertToDto(productSpecificationEntity: ProductSpecificationEntity): ProductSpecificationDto {
        return new ProductSpecificationDto(
            productSpecificationEntity.productBrand,
            productSpecificationEntity.productType,
            productSpecificationEntity.productWarranty,
            productSpecificationEntity.prudctAdventages,
            productSpecificationEntity.prudctFeatures
        );
    }
}