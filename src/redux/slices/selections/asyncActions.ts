import { createAsyncThunk } from '@reduxjs/toolkit';

import { selectionsAPI } from '@/services/api';

export const fetchSelections = createAsyncThunk('selections/fetchSelections', () => selectionsAPI.getSelections());
