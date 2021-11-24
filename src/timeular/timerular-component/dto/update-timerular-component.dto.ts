import { PartialType } from '@nestjs/mapped-types';
import { CreateTimerularComponentDto } from './create-timerular-component.dto';

export class UpdateTimerularComponentDto extends PartialType(CreateTimerularComponentDto) {}
