'use client';

import { withFormikInput } from '@/shared/lib/hocs/withFormikInput';
import { DadataCountryInput } from '@/shared/ui/dadata/DadataCountryInput/DadataCountryInput';

export const FormikDadataCountryInput = withFormikInput(DadataCountryInput);
