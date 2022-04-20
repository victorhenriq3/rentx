import { Specification } from "../entities/Specification";

/* eslint-disable prettier/prettier */
interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({ description, name }: ICreateSpecificationDTO): Promise<void>;
    findByName(name: string): Promise<Specification>
}
export { ISpecificationRepository, ICreateSpecificationDTO }