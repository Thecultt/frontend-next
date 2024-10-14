'use client';

import { withFormikInput } from '@/shared/lib/hocs/withFormikInput';
import { DadataAddressInput } from '@/shared/ui/dadata/DadataAddressInput/DadataAddressInput';

export const FormikDadataAddressInput = withFormikInput(DadataAddressInput);
