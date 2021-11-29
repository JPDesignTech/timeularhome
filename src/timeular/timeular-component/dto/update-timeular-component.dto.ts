import { PartialType } from '@nestjs/mapped-types';
import { CreateTimeularComponentDto } from './create-timeular-component.dto';

export class UpdateTimeularComponentDto extends PartialType(CreateTimeularComponentDto) {}
