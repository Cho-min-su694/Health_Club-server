import { PrimitiveOnly } from 'src/util/types';
import { Prisma } from "prisma/basic";

export type UpdateEquipmentDto = PrimitiveOnly<Prisma.GymEquipmentUpdateInput> & {bodyPartIds:number[]};

export type UpdateEquipmentsonGymsDto = PrimitiveOnly<Prisma.GymEuquipmentsOnGymsUpdateArgs>;
