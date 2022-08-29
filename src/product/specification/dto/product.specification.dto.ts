import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class ProductSpecificationDto {
    
    public constructor(productBrand: string, productType: string, productWarranty: Number, prudctAdventages: string[], prudctFeatures: string[]) {
        this.productBrand = productBrand;
        this.productType = productType;
        this.productWarranty = productWarranty;
        this.prudctAdventages = prudctAdventages;
        this.prudctFeatures = prudctFeatures;
    }

    @IsNotEmpty()
    @IsString()
    public readonly productBrand: string
    @IsNotEmpty()
    @IsString()
    public readonly productType: string 
    @IsNotEmpty()
    @IsNumber()
    public readonly productWarranty: Number 
    @IsNotEmpty()
    @IsString()
    public readonly prudctAdventages: string[]
    @IsNotEmpty()
    @IsString()
    public readonly prudctFeatures: string[]
}