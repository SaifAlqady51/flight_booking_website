import { objectType } from 'nexus';
import { User } from './User';
export const Account = objectType({
    name: 'Account',
    definition(t) {
        t.string('id');
        t.string('user_id');
        t.string('type');
        t.string('provider');
        t.string('providerAccountId');
        t.string('token_type');
        t.string('refresh_token');
        t.string('access_token');
        t.int('expires_at');
        t.string('scope');
        t.string('id_token');
        t.field('createdAt', { type: 'Date' });
        t.field('updatedAt', { type: 'Date' });
        t.field('user', {
            type: User,
        });
    },
});
