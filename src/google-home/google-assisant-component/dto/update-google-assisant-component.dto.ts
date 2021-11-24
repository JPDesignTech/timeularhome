import { PartialType } from '@nestjs/mapped-types';
import { CreateGoogleAssisantComponentDto } from './create-google-assisant-component.dto';

export class UpdateGoogleAssisantComponentDto extends PartialType(CreateGoogleAssisantComponentDto) {}
