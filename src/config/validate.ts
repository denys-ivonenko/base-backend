import { plainToInstance } from 'class-transformer';
import { IsNumber, validateSync } from 'class-validator';

class AppConfig {
  @IsNumber()
  HTTP_PORT: number;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(
    AppConfig,
    config,
    { enableImplicitConversion: true },
  );
  const errors = validateSync(validatedConfig, { skipMissingProperties: false });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}