# CSRF Protection Setup

This application uses the `csrf-csrf` package to implement CSRF (Cross-Site Request Forgery) protection using the Double Submit Cookie Pattern.

## Configuration

The CSRF middleware is configured in `src/app.middleware.ts` with the following settings:

### Key Configuration Options

- **Secret Key**: Set via `CSRF_SECRET` environment variable (defaults to a development key)
- **Cookie Name**: `__Host-psifi.x-csrf-token`
- **Cookie Options**:
  - `sameSite`: 'lax' (can be set to 'strict' for more security)
  - `secure`: true in production, false in development
  - `httpOnly`: true (prevents JavaScript access)
  - `path`: '/'

### Ignored Methods

The following HTTP methods bypass CSRF protection:

- GET
- HEAD
- OPTIONS

All other methods (POST, PUT, DELETE, PATCH) require a valid CSRF token.

## Environment Variables

Add these to your `.env` file:

```env
# CSRF Protection
CSRF_SECRET=your-super-secret-csrf-key-change-this-in-production
```

**Important**: Change the default secret in production!

## Usage

### 1. Get a CSRF Token

Before making any state-changing request (POST, PUT, DELETE, etc.), your client must first obtain a CSRF token:

**Endpoint**: `GET /api/v1/csrf/token`

**Response**:

```json
{
  "success": true,
  "data": {
    "token": "your-csrf-token-here"
  }
}
```

This endpoint:

- Does not require authentication
- Sets a CSRF cookie automatically
- Returns the CSRF token to be included in subsequent requests

### 2. Include the Token in Requests

For all state-changing requests, include the CSRF token in the `x-csrf-token` header:

**Example using fetch**:

```javascript
// First, get the token
const response = await fetch('http://localhost:3000/api/v1/csrf/token', {
  credentials: 'include', // Important: this sends and receives cookies
});
const { data } = await response.json();
const csrfToken = data.token;

// Then use it in your requests
await fetch('http://localhost:3000/api/v1/auth/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-csrf-token': csrfToken,
  },
  credentials: 'include', // Important: this sends the CSRF cookie
  body: JSON.stringify({
    // your data
  }),
});
```

**Example using axios**:

```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  withCredentials: true, // Important: this sends and receives cookies
});

// Get CSRF token
const { data } = await api.get('/csrf/token');
const csrfToken = data.data.token;

// Use it in requests
await api.post(
  '/auth/signup',
  {
    /* your data */
  },
  {
    headers: {
      'x-csrf-token': csrfToken,
    },
  },
);
```

### 3. Session Identifier (Optional)

The CSRF middleware also looks for a session identifier in the `x-session-id` header. If you're using sessions, include this header:

```javascript
headers: {
  'x-csrf-token': csrfToken,
  'x-session-id': sessionId
}
```

## CORS Configuration

The CORS configuration has been updated to allow the following headers:

- `Content-Type`
- `Authorization`
- `x-client-id`
- `x-refresh-token`
- `x-csrf-token` (for CSRF protection)
- `x-session-id` (for session identification)

## Error Handling

If a request is missing the CSRF token or includes an invalid token, the server will respond with a `403 Forbidden` error:

```json
{
  "statusCode": 403,
  "message": "invalid csrf token",
  "code": "ERR_BAD_CSRF_TOKEN"
}
```

## Security Best Practices

1. **Always use HTTPS in production**: Set `secure: true` in cookie options
2. **Change the CSRF secret**: Use a strong, random secret key
3. **Use strict sameSite**: Consider changing `sameSite` from 'lax' to 'strict'
4. **Validate on the client**: Check for CSRF token before making requests
5. **Refresh tokens**: Consider implementing token refresh for long-lived sessions

## Testing

To bypass CSRF protection in tests, you can either:

1. **Include proper CSRF tokens in your test requests**
2. **Mock the CSRF middleware**
3. **Use the ignored methods** (GET, HEAD, OPTIONS)

## Troubleshooting

### "invalid csrf token" error

**Causes**:

- Missing `x-csrf-token` header
- Token doesn't match the cookie
- Cookie was not sent with the request
- Token has expired

**Solutions**:

- Ensure you're getting a fresh token from `/csrf/token`
- Include `credentials: 'include'` (fetch) or `withCredentials: true` (axios)
- Check that cookies are enabled in the browser
- Verify the token is being sent in the header

### CORS errors

**Solution**: Ensure your client origin is in the `ALLOWED_ORIGINS` environment variable:

```env
ALLOWED_ORIGINS=http://localhost:3001,http://localhost:3000
```

## Additional Resources

- [csrf-csrf Documentation](https://github.com/Psifi-Solutions/csrf-csrf)
- [OWASP CSRF Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
- [Double Submit Cookie Pattern](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#double-submit-cookie)
