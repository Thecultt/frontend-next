// TODO update this model
export interface IUser {
    user_id: number;
    user_wishlist_link: string | null;
    fullname: string | null;
    email: string | null;
    phone: string | null;
    mobilephone: string | null;
    blocked: string | null;
    blockeduntil: string | null;
    blockedafter: string | null;
    logincount: string | null;
    lastlogin: string | null;
    thislogin: string | null;
    failedlogincount: string | null;
    sessionid: string | null;
    dob: string | null;
    gender: string | number | null;
    address: string | null;
    country: string | null;
    city: string | null;
    state: string | null;
    street: string | null;
    house: string | null;
    flat: string | null;
    zip: string | null;
    fax: string | null;
    photo: string | null;
    comment: string | null;
    website: string | null;
    extended: string | null;
    pasport: string | null;
    inn: string | null;
    bik: string | null;
    rs: string | null;
    name: string | null;
    lastname: string | null;
    favorite_brand: string | null;
    username_telegram: string | null;
    dr: string | null;
    ad_mail: string | null;
    middlename: string | null;
    mail_count: string | null;
}

export interface UserState {
    isLoaded: boolean;
    isSending: boolean;
    // TODO ts model IUser
    user: any;
}

export enum UserActionTypes {
    SET_USER = 'SET_USER',
    SET_USER_IS_SENDING = 'SET_USER_IS_SENDING',
}

interface setUser {
    type: UserActionTypes.SET_USER;
    payload: any;
}

interface setUserIsSending {
    type: UserActionTypes.SET_USER_IS_SENDING;
    payload: boolean;
}

export type UserActions = setUser | setUserIsSending;
