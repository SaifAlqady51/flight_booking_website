/* eslint-disable no-unused-vars*/
import type { Session, User } from 'next-auth';
import type { JWT } from 'next-auth/jwt';

type UserId = string;
type UserSubscription  = string;
declare module 'next-auth/jwt' {
    interface JWT {
        id: UserId;
        subscription: UserSubscription;
    }
}

declare module 'next-auth' {
    interface Session {
        user: User & {
			id?: UserId;
			subscription: UserSubscription; 
        } 
    }
}
