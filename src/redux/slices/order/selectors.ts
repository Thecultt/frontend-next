import { RootState } from '@/redux/store';

export const selectOrderDeliveryPrice = (state: RootState) => state.orderNew.deliveryPrice;

export const selectOrderPromoCodeIsLoading = (state: RootState) => state.orderNew.promoCodeIsLoading;
export const selectOrderPromoCodeError = (state: RootState) => state.orderNew.promoCodeError;
export const selectOrderPromoCode = (state: RootState) => state.orderNew.promoCode;

export const selectOrderCreateIsLoading = (state: RootState) => state.orderNew.createOrderIsLoading;
export const selectOrderSubmitIsLoading = (state: RootState) => state.orderNew.submitOrderIsLoading;

export const selectOrderTempForm = (state: RootState) => state.orderNew.tempForm;
