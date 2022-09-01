import { IsNotEmpty, IsString, IsNumber } from "class-validator";
import { ProductSpecificationEntity } from "../specification/entity/product.specification.entity";

export class ProductDto {

    public constructor(productName: string, basePrice: Number, finalPrice: Number, discountPrice: Number, description: string, productSpecification: ProductSpecificationEntity[]) {
        this.productName = productName;
        this.basePrice = basePrice;
        this.finalPrice = finalPrice;
        this.discountPrice = discountPrice;
        this.description = description;
        this.productSpecification = productSpecification;
    }
    

    @IsNotEmpty()
    @IsString()
    public readonly productName: string

    @IsNotEmpty()
    @IsNumber()
    public readonly basePrice: Number

    @IsNotEmpty()
    @IsNumber()
    public readonly finalPrice: Number

    @IsNotEmpty()
    @IsNumber()
    public readonly discountPrice: Number

    @IsNotEmpty()
    @IsString()
    public readonly description: string

    @IsNotEmpty()
    public readonly productSpecification: ProductSpecificationEntity[]
}