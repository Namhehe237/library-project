export const oktaConfig = {
    clientId: '0oaligvd28r82HawU5d7',
    issuer: 'https://dev-07213562.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}