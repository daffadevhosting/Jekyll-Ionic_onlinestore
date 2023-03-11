'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./index-d8f4f216.js');
require('tslib');
require('@firebase/util');
require('@firebase/app');
require('@firebase/logger');
require('@firebase/component');
require('node-fetch');



exports.ActionCodeOperation = index.ActionCodeOperation;
exports.ActionCodeURL = index.ActionCodeURL;
exports.AuthCredential = index.AuthCredential;
exports.AuthErrorCodes = index.AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY;
exports.EmailAuthCredential = index.EmailAuthCredential;
exports.EmailAuthProvider = index.EmailAuthProvider;
exports.FacebookAuthProvider = index.FacebookAuthProvider;
exports.FactorId = index.FactorId;
exports.GithubAuthProvider = index.GithubAuthProvider;
exports.GoogleAuthProvider = index.GoogleAuthProvider;
exports.OAuthCredential = index.OAuthCredential;
exports.OAuthProvider = index.OAuthProvider;
exports.OperationType = index.OperationType;
exports.PhoneAuthCredential = index.PhoneAuthCredential;
exports.PhoneAuthProvider = index.PhoneAuthProvider;
exports.PhoneMultiFactorGenerator = index.PhoneMultiFactorGenerator;
exports.ProviderId = index.ProviderId;
exports.RecaptchaVerifier = index.RecaptchaVerifier;
exports.SAMLAuthProvider = index.SAMLAuthProvider;
exports.SignInMethod = index.SignInMethod;
exports.TwitterAuthProvider = index.TwitterAuthProvider;
exports.applyActionCode = index.applyActionCode;
exports.beforeAuthStateChanged = index.beforeAuthStateChanged;
exports.browserLocalPersistence = index.browserLocalPersistence;
exports.browserPopupRedirectResolver = index.browserPopupRedirectResolver;
exports.browserSessionPersistence = index.browserSessionPersistence;
exports.checkActionCode = index.checkActionCode;
exports.confirmPasswordReset = index.confirmPasswordReset;
exports.connectAuthEmulator = index.connectAuthEmulator;
exports.createUserWithEmailAndPassword = index.createUserWithEmailAndPassword;
exports.debugErrorMap = index.debugErrorMap;
exports.deleteUser = index.deleteUser;
exports.fetchSignInMethodsForEmail = index.fetchSignInMethodsForEmail;
exports.getAdditionalUserInfo = index.getAdditionalUserInfo;
exports.getAuth = index.getAuth;
exports.getIdToken = index.getIdToken;
exports.getIdTokenResult = index.getIdTokenResult;
exports.getMultiFactorResolver = index.getMultiFactorResolver;
exports.getRedirectResult = index.getRedirectResult;
exports.inMemoryPersistence = index.inMemoryPersistence;
exports.indexedDBLocalPersistence = index.indexedDBLocalPersistence;
exports.initializeAuth = index.initializeAuth;
exports.isSignInWithEmailLink = index.isSignInWithEmailLink;
exports.linkWithCredential = index.linkWithCredential;
exports.linkWithPhoneNumber = index.linkWithPhoneNumber;
exports.linkWithPopup = index.linkWithPopup;
exports.linkWithRedirect = index.linkWithRedirect;
exports.multiFactor = index.multiFactor;
exports.onAuthStateChanged = index.onAuthStateChanged;
exports.onIdTokenChanged = index.onIdTokenChanged;
exports.parseActionCodeURL = index.parseActionCodeURL;
exports.prodErrorMap = index.prodErrorMap;
exports.reauthenticateWithCredential = index.reauthenticateWithCredential;
exports.reauthenticateWithPhoneNumber = index.reauthenticateWithPhoneNumber;
exports.reauthenticateWithPopup = index.reauthenticateWithPopup;
exports.reauthenticateWithRedirect = index.reauthenticateWithRedirect;
exports.reload = index.reload;
exports.sendEmailVerification = index.sendEmailVerification;
exports.sendPasswordResetEmail = index.sendPasswordResetEmail;
exports.sendSignInLinkToEmail = index.sendSignInLinkToEmail;
exports.setPersistence = index.setPersistence;
exports.signInAnonymously = index.signInAnonymously;
exports.signInWithCredential = index.signInWithCredential;
exports.signInWithCustomToken = index.signInWithCustomToken;
exports.signInWithEmailAndPassword = index.signInWithEmailAndPassword;
exports.signInWithEmailLink = index.signInWithEmailLink;
exports.signInWithPhoneNumber = index.signInWithPhoneNumber;
exports.signInWithPopup = index.signInWithPopup;
exports.signInWithRedirect = index.signInWithRedirect;
exports.signOut = index.signOut;
exports.unlink = index.unlink;
exports.updateCurrentUser = index.updateCurrentUser;
exports.updateEmail = index.updateEmail;
exports.updatePassword = index.updatePassword;
exports.updatePhoneNumber = index.updatePhoneNumber;
exports.updateProfile = index.updateProfile;
exports.useDeviceLanguage = index.useDeviceLanguage;
exports.verifyBeforeUpdateEmail = index.verifyBeforeUpdateEmail;
exports.verifyPasswordResetCode = index.verifyPasswordResetCode;
//# sourceMappingURL=index.js.map
