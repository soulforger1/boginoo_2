const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();

exports.sendWelcomeEmail = functions.auth.user().onCreate(async (user) => {
    const userName = user.email.split('@')[0];
    console.log(user)
    const uid = user.uid;

    await db.doc(`users/${uid}`).set({ userName });
    await db.doc(`users/${uid}/history/0`).set({ hi: 'none' });
});

exports.firestore = functions.firestore.document('users/{user_id}/history/{history_id}')
    .onCreate((change, context) => {
        const data = change.data();
        const id = context.params.history_id;

        db.collection('links').doc(id).set({
            long: data.long
        })
    })