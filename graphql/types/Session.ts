import { objectType } from 'nexus';
import { User } from './User';

export const Session = objectType({
    name: 'Session',
    definition(t) {
        t.string('id');
        t.string('user_id');
        t.string('session_token');
        t.string('access_token');
		t.field('expires',{type: 'Date' });
		t.field('createdAt',{type: 'Date'});
		t.field('updatedAt', {type: 'Date'});
        t.field('user', {type: User});
    },
});
