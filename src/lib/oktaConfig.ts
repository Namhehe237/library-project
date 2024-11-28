export const oktaConfig = {
    clientId: '0oalh4ujf8XUfgNdF5d7',
    issuer: 'https://dev-07213562.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}