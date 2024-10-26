'use server'

import * as auth from '@/auth';

/**
 * Signs the user in with GitHub.
 *
 * @returns A promise that resolves once the signin process is complete.
 */
export async function signIn() {
    return auth.signIn('github');
}

/**
 * Signs the user out.
 *
 * @returns A promise that resolves once the signout process is complete.
 */
export async function signOut() {
    return auth.signOut();
}